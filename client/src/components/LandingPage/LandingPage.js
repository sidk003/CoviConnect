import React, { useState, useContext, useEffect } from "react";
import { Box, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { Login } from "./Login/Login";
import { ReadWrite } from "../ReadWrite/ReadWrite";
import { GlobalContext } from "../../context/GlobalState";
import useStyles from "./Styles";

export const LandingPage = () => {
  const classes = useStyles();
  const { aboutVaccine, getAboutVaccine } = useContext(GlobalContext);

  useEffect(() => {
    getAboutVaccine();
  }, []);

  // useEffect(() => {
  //   getVaccine();
  //   // below code to avoid warning
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // getVaccine();

  if (aboutVaccine !== undefined) console.log("Vacccine: ", aboutVaccine);

  const [isLoggedIn, setLogin] = useState(false);

  const GetLoginState = (success) => {
    console.log("loggedIn? ", success);
    setLogin(success);
  };

  return (
    <Router>
      <CssBaseline />
      <div className={classes.root}>
        {isLoggedIn ? (
          <ReadWrite />
        ) : (
          <div>
            <Box className={classes.name}>CoviConnect</Box>
            <Login GetLoginState={GetLoginState} />
          </div>
        )}
      </div>
    </Router>
  );
};
