import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline, Box, Fab, Toolbar, Container } from "@material-ui/core";
import { Navbar } from "./Navbar/Navbar";
import { Dashboard } from "./Dashboard/Dashboard";
import useStyles from "./Styles";

export const Read = () => {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <CssBaseline />
        <Navbar />
        <Dashboard />
      </div>
    </Router>
  );
};
