import React from "react";
import { Typography, Box } from "@material-ui/core";
import { AreaChart } from "./AreaChart/AreaChart";
import { PieChart } from "./PieChart/PieChart";
import useStyles from "./Styles";

export const Dashboard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <Box className={classes.analytics}>
        <Typography variant="h4">
          General Information about COVID in India
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Stay Safe!
        </Typography>
        <AreaChart />
        <PieChart />
      </Box>
    </Box>
  );
};
