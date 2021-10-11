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
  InputAdornment,
  Link,
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
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.5rem",
    color: "white",
    textAlign: "center",
    width: "45%",
  },
  main: {
    height: "100vh",
    width: "55%",
    justifyContent: "center",
  },
  top: {
    padding: "1.875rem 2.625rem",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  lightText: {
    color: "#B0B0B0",
  },
  loginBtn: {
    fontFamily: "Montserrat",
    margin: "2rem",
  },
  btn__secondary: {
    boxShadow: "0px 3px 5px -3px #3A8DFF66",
  },
  form: {
    maxWidth: "358px",
    margin: "0 auto",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2.375rem",
  },
  formTitle: {
    marginBottom: "2rem",
    fontWeight: 600,
  },
  inputContainer: {
    gap: "2.625rem",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const emailAddress = event.target.emailAddress.value;
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
          <Typography variant="h2" className={classes.slogan}>
            Converse with anyone <br /> with any language.
          </Typography>
        </Grid>
        <Grid container className={classes.main}>
          <Grid container className={classes.top}>
            <Typography variant="body2" className={classes.lightText}>
              Don't have an account?
            </Typography>
            <Button
              size="large"
              color="primary"
              className={classes.btn__secondary}
              onClick={() => history.push("/register")}>
              Create account
            </Button>
          </Grid>
          <form onSubmit={handleLogin} className={classes.form}>
            <Typography variant="h2" className={classes.formTitle}>
              Welcome back!
            </Typography>
            <Grid container className={classes.formContainer}>
              <Grid container item className={classes.inputContainer}>
                <FormControl required fullWidth>
                  <TextField
                    aria-label="E-mail address"
                    label="E-mail address"
                    name="emailAddress"
                    type="text"
                  />
                </FormControl>
                <FormControl required fullWidth>
                  <TextField
                    label="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            aria-label="Password recovery"
                            color="primary">
                            Forgot?
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.loginBtn}>
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
