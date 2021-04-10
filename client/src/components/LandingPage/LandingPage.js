import React from "react";
import { Box, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./Login/Login";
import useStyles from "./Styles";

export const LandingPage = () => {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <div className={classes.root}>
            <Box className={classes.name}>CoviConnect</Box>
            <Login />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};
