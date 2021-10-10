import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "./store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  hero: {
    backgroundImage:
      "linear-gradient(to bottom, #3A8DFFD9, #86B9FFD9),  url(https://res.cloudinary.com/diswlgneg/image/upload/v1633815148/bg-img_i2xyym.png) ",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="center">
      <Box className={classes.container}>
        <Grid className={classes.hero} container item>
          <img
            src="https://res.cloudinary.com/diswlgneg/image/upload/v1633837554/bubble_xssqyw.svg"
            alt="speech bubble icon"
          />
          <h3>
            Converse with anyone, <br /> in any language.
          </h3>
        </Grid>
        <Grid container item>
          <Grid container item>
            <Typography>Don't have an account?</Typography>
            <Button onClick={() => history.push("/register")}>
              Create account
            </Button>
          </Grid>
          <form onSubmit={handleLogin}>
            <Grid>
              <Grid>
                <FormControl margin="normal" required>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <FormControl margin="normal" required>
                <TextField
                  label="password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
              <Grid>
                <Button type="submit" variant="contained" size="large">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
