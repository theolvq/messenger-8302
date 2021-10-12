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
} from "@material-ui/core";
import { login } from "../store/utils/thunkCreators";
import { useStyles } from "./styles";
import Hero from "./Hero";

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await login({ username, password, email });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="center">
      <Box className={classes.container}>
        <Hero />
        <Grid container className={classes.main}>
          <Grid container className={classes.top}>
            <Typography variant="body2" className={classes.lightText}>
              Don't have an account?
            </Typography>
            <Button
              className={classes.switchBtn}
              size="large"
              color="primary"
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
                    name="email"
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
                  className={classes.loginBtn}
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large">
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
