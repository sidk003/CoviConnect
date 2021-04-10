import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 220;
const drawerWidthMobile = "100vw";

export default makeStyles((theme) => ({
  row: {
    flexGrow: 1,
  },
  // container: {
  //   width: 1170,
  //   margin: "auto",
  // },
  // buttonFontSize: {
  //   fontSize: "11px",
  //   color: "#a1a1a1",
  // },

  AppBar: {
    //height:400,
    //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
    backgroundColor: "#fff",
    backgroundSize: "cover",
  },

  // loginButton: {
  //   background: "#e91e63",
  //   color: "#fff",
  //   borderRadius: "25px",
  //   padding: "0px 25px",

  //   "&:hover": {
  //     background: "blue",
  //     boxShadow: "0px 2px 10px #888888",
  //   },
  // },
  grow: {
    flexGrow: 1,
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
    marginLeft: 50,
    fontSize: 30,
    fontFamily: "Pacifico",
  },
}));
