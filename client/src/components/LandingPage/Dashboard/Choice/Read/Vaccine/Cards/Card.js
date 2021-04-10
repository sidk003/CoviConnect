import React, { useState } from "react";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./Styles";

export const Cards = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.purple}>
            NM
          </Avatar>
        }
        title="Name"
        subheader="Date Posted: September 14, 2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          If any comment provided
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="primary">
          Contact them
        </Button>
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
          <Typography paragraph>Age: 12</Typography>
          <Typography paragraph>Hospital: SMIMMERS</Typography>
          <Typography paragraph>Vaccine: Covishield</Typography>
          <Typography paragraph>more: info</Typography>
          <Typography>more: info</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
