import React from "react";
import { Typography, Box } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Profile } from "../Profile/Profile";
import { Choice } from "./Choice/Choice";
import { AreaChart } from "./AreaChart/AreaChart";
import { PieChart } from "./PieChart/PieChart";
import { Navbar } from "../Navbar/Navbar";
import useStyles from "./Styles";

export const Dashboard = () => {
  const classes = useStyles();
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
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
        </Route>
        <Route path="/choice" component={Choice} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};
