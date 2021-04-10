import React, { useState } from "react";
import { Box, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./Login/Login";
import { ReadWrite } from "../ReadWrite/ReadWrite";
import useStyles from "./Styles";

export const LandingPage = () => {
  const classes = useStyles();

  const [isLoggedIn, setLogin] = useState(false);

  return (
    <Router>
      <CssBaseline />
      <div className={classes.root}>
        {isLoggedIn ? (
          <ReadWrite />
        ) : (
          <div>
            <Box className={classes.name}>CoviConnect</Box>
            <Login />
          </div>
        )}
      </div>
    </Router>
  );
};
