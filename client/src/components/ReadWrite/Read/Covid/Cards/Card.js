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

export const Cards = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography className={classes.name}>Name</Typography>
          <Typography className={classes.age}>Age: 12</Typography>
          <Typography className={classes.date}>
            Date of vaccination : date
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
            <Typography paragraph>Vaccine: covisheild</Typography>
            <Typography paragraph>Hospital: SMIMMER</Typography>
            <Typography paragraph>Vaccine: covisheild</Typography>
            <Typography paragraph>Vaccine: covisheild</Typography>
            <Typography>More Comments</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
