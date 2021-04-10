import React from "react";
import { Box, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./Login/Login";
import { ReadWrite } from "../ReadWrite/ReadWrite";
import useStyles from "./Styles";

export const LandingPage = () => {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route path="/">
          <div className={classes.root}>
            <Box className={classes.name}>CoviConnect</Box>
            <Login />
          </div>
        </Route>
        <Route path="/readwrite" component={ReadWrite} />
      </Switch>
    </Router>
  );
};
