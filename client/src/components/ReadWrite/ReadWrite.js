import React from "react";
import { ButtonBase, Typography } from "@material-ui/core";
import useStyles from "./Styles";

const images = [
  {
    url: "https://i.insider.com/5d76627f2e22af514118b142",
    title: "Write about your experience",
    width: "35%",
    height: "40%",
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUiG0G-zHv96hjOfptKwbsZ0IAu0ZEl_wdw&usqp=CAU",
    title: "Read about others experience",
    width: "35%",
    height: "40%",
  },
];

export const ReadWrite = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
};
