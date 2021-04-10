import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Cards } from "./Cards/Card";
import useStyles from "./Styles";

export const Vaccine = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.header}>
        Users' personal insights about vaccination
      </Typography>
      <Cards className={classes.cards} />
    </div>
  );
};
