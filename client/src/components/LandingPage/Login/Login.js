import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SigninSide from "./SigninSide";
import SignupSide from "./SignupSide";
import useStyles from "./Styles";

export const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <Router>
        <div className="App">
          <Route path="/" exact component={SigninSide} />
          <Route exact path="/signup" component={SignupSide} />
        </div>
      </Router>
    </div>
  );
};
