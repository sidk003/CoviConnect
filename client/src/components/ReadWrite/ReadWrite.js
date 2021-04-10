import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ButtonBase, Typography } from "@material-ui/core";
import { Write } from "./Write/Write";
import { Read } from "./Read/Read";
import { Link } from "react-router-dom";
import useStyles from "./Styles";

export const ReadWrite = () => {
  const classes = useStyles();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className={classes.root}>
            <ButtonBase
              focusRipple
              key="Write about your experience"
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              component={Link}
              to={"/write"}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${"https://i.insider.com/5d76627f2e22af514118b142"})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  Write about your experience
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
            <ButtonBase
              focusRipple
              key="Read about others experience"
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              component={Link}
              to={"/read"}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUiG0G-zHv96hjOfptKwbsZ0IAu0ZEl_wdw&usqp=CAU"})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  Read about others experience
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </div>
        </Route>
        <Route path="/write" component={Write} />
        <Route path="/read" component={Read} />
      </Switch>
    </Router>
  );
};
