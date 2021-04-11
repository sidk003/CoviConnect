import React from "react";
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
      {/* {vaccine.data.map((data) => (
        <Cards data={data} key={Math.random().toString(36).substr(2, 9)} />
      ))} */}
      <Cards className={classes.cards} />
      <Cards className={classes.cards} />
    </div>
  );
};
