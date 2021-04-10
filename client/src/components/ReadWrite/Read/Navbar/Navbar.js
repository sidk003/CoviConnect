import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useStyles from "./Styles";

export const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters={true}>
          <Grid className={classes.grow}>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              noWrap
            >
              CoviConnect
            </Typography>
          </Grid>
          <Button
            color="inherit"
            className={classes.buttonFontSize}
            component={Link}
            to={"/covid"}
          >
            COVID
          </Button>
          <Button
            color="inherit"
            className={classes.buttonFontSize}
            component={Link}
            to={"/vaccine"}
          >
            Vaccine
          </Button>
          <IconButton
            onClick={handleMenu}
            className={[classes.buttonFontSize, classes.loginButton]}
          >
            <AccountCircleIcon style={{ color: "white" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Sign-Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};
