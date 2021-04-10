import React, { useState } from "react";
import { CssBaseline, Box, Fab, Toolbar, Container } from "@material-ui/core";
import useStyles from "./Styles";

export const Vaccine = () => {
  const classes = useStyles();
  return <div className={classes.root}>Vaccine Cards here</div>;
};
