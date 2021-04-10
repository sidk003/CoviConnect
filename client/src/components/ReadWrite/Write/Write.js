import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ButtonBase, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./Styles";
import { Vaccine } from "./Vaccine/Vaccine";
import { Covid } from "./Covid/Covid";

export const Write = () => {
  const classes = useStyles();
  return (
    <Router>
      <Switch>
        <Route path="/write">
          <div className={classes.root}>
            <ButtonBase
              focusRipple
              key="Vaccine"
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              component={Link}
              to={"/vaccine"}
            >
              <span
                className={classes.imageSrc}
                style={
                  {
                    // backgroundImage: `url(${"https://image.flaticon.com/icons/png/512/2842/2842965.png"})`,
                  }
                }
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  Vaccine
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
            <ButtonBase
              focusRipple
              key="covid"
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              component={Link}
              to={"/covid"}
            >
              <span
                className={classes.imageSrc}
                style={
                  {
                    // backgroundImage: `url(${"https://image.flaticon.com/icons/png/512/2853/2853896.png"})`,
                  }
                }
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  COVID
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </div>
        </Route>
        <Route path="/vaccine" component={Vaccine} />
        <Route path="/covid" component={Covid} />
      </Switch>
    </Router>
  );
};
