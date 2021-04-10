import { blue } from "@material-ui/core/colors";
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
      "linear-gradient(left,  rgba(211,211,211,1) 0%, rgba(225,225,225,1) 100%)",
  },
  name: {
    fontSize: 82,
    marginTop: 220,
    marginLeft: 100,
    color: "rgba(63, 81, 181,1)",
    fontFamily: "Pacifico",
  },
  //   divider: {
  //     marginLeft: 50,
  //     width: 3,
  //     height: 800,
  //   },
}));
