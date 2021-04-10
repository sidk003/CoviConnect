import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SigninSide from "./SigninSide";
import SignupSide from "./SignupSide";
import useStyles from "./Styles";
import { Card } from "@material-ui/core";

export const Login = ({ GetLoginState }) => {
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <Router>
        <Card elevation={3}>
          <div>
            <Route
              exact
              path="/"
              render={() => <SigninSide GetLoginState={GetLoginState} />}
            />
            <Route exact path="/signup" component={SignupSide} />
          </div>
        </Card>
      </Router>
    </div>
  );
};
