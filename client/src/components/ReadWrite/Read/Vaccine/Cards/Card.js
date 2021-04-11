import React, { useState } from "react";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  IconButton,
  Collapse,
  CardActions,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./Styles";

export const Cards = ({ data }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  var age = 0;
  var comment = "";
  var dosesTaken = "";
  var hospital = "";
  var hospitalAddress = "";
  var locationAddress = "";
  var locationCity = "";
  var locationPinCode = 0;
  var locationState = "";
  var medicinesTaken = "";
  var name = "";
  var occupation = "";
  var symptoms = null;
  var username = "";
  var vaccineTaken = "";
  if (data !== undefined) {
    age = data.age;
    comment = data.comment;
    dosesTaken = data.dosesTaken;
    hospital = data.hospital;
    hospitalAddress = data.hospitalAddress;
    locationAddress = data.locationAddress;
    locationCity = data.locationCity;
    locationPinCode = data.locationPinCode;
    locationState = data.locationState;
    medicinesTaken = data.medicinesTaken;
    name = data.name;
    occupation = data.occupation;
    symptoms = data.symptoms;
    username = data.username;
    vaccineTaken = data.vaccineTaken;
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography className={classes.name}>Name: {name}</Typography>
          <Typography className={classes.age}>Age: {age}</Typography>
          <Typography className={classes.date}>
            Occupation: {occupation}
          </Typography>

          <Divider className={classes.divider} light />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Doses Taken: {dosesTaken}</Typography>
            <Typography paragraph>Hospital Name: {hospital}</Typography>
            <Typography paragraph>
              Hospital Address : {hospitalAddress}
            </Typography>
            <Typography paragraph>
              User's location: {locationAddress}
            </Typography>
            <Typography paragraph>City: {locationCity}</Typography>
            <Typography paragraph>Pincode: {locationPinCode}</Typography>
            <Typography paragraph>State: {locationState}</Typography>
            <Typography paragraph>Medicne's Taken: {medicinesTaken}</Typography>
            <Typography paragraph>Occupation: {occupation}</Typography>
            <Typography paragraph>Symptoms: {symptoms}</Typography>
            <Typography paragraph>User-anme: {username}</Typography>
            <Typography paragraph>Vaccine-Taken: {vaccineTaken}</Typography>
            <Typography paragraph>
              Comments from user(if any): {comment}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
