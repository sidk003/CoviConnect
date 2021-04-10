import React, { useState, useContext } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GlobalContext } from "../../../context/GlobalState";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInSide = ({ GetLoginState }) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPromise, setPromise] = useState(false);
  const { userLogin, token, error } = useContext(GlobalContext);

  const handleLogin = (response) => {
    // setErrorMessage(error.data.error);
    let possiblePromise = response;
    setPromise(possiblePromise instanceof Promise);

    if (error) {
      setErrorMessage(error.data.error);
      console.log(errorMessage);
    }
    if (token) {
      setErrorMessage("Login Successful");
      GetLoginState(true);
      console.log(token);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      // id: Math.floor(Math.random() * 100000000),
      username,
      password,
    };
    const response = userLogin(newEntry);
    handleLogin(response);
    // let possiblePromise = userLogin(newEntry);
    // let isPromise = possiblePromise instanceof Promise;
    // console.log(isPromise);
    // if (isPromise) handleLogin();
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {isPromise ? (
          <h3 className="error"> {errorMessage} </h3>
        ) : (
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        )}

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}></Box>
        </form>
      </div>
    </Grid>
  );
};

export default SignInSide;
