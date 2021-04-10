import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SigninSide from "./SigninSide";
import SignupSide from "./SignupSide";
import useStyles from "./Styles";
import { palette } from '@material-ui/system';
import Card from '@material-ui/core/Card';


export const Login = () => {
  const classes = useStyles();

  return (
    
    <div className={classes.login}>
      <Router>
        <Card elevation={3}>
          <div>
            <Route path="/" exact component={SigninSide} />
            <Route exact path="/signup" component={SignupSide} />
          </div>
          </Card>
      </Router>
    </div>
  );
};
