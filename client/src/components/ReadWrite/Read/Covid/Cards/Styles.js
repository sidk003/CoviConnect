import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    width: "95vw",
    marginTop: 30,
    marginLeft: 30,
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  content: {
    textAlign: "left",
    padding: theme.spacing(3),
    display: "flex",
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
  subheading: {
    marginLeft: 5,
    fontSize: 14,
    // color: theme.palette.secondary.main,
  },
  name: {
    fontSize: 26,
    marginLeft: 5,
  },
  age: {
    fontSize: 26,
    marginLeft: 420,
  },
  date: {
    fontSize: 26,
    marginLeft: 320,
  },
  heading: {
    fontSize: 36,
    marginLeft: 15,
    fontFamily: "serif",
  },
}));
