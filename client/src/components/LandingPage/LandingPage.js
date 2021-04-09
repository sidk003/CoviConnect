import React from "react";
import { Box, CssBaseline, Divider } from "@material-ui/core";
import { Login } from "./Login/Login";
import useStyles from "./Styles";

export const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Box className={classes.name}>CoviConnect</Box>
        {/* <Divider className={classes.divider} orientation="vertical" flexItem /> */}
        <Login />
      </div>
    </>
  );
};
