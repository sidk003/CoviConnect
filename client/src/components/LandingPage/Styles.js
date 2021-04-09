import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.80em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "-5px 0px 13px -4px rgba(0,0,0,0.75)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(96, 92, 97, 0.57)",
    },
  },
  root: {
    display: "flex",
    height: "100vh",
    background:
      "linear-gradient(left,  rgba(47,100,90,1) 0%, rgba(111,161,123,1) 100%)",
  },
  name: {
    fontSize: 62,
    marginTop: 250,
    marginLeft: 150,
    fontFamily: "Arial",
  },
  //   divider: {
  //     marginLeft: 50,
  //     width: 3,
  //     height: 800,
  //   },
}));
