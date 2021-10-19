import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const Hero = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.hero} container item>
      <img
        src="https://res.cloudinary.com/daawascript/image/upload/v1633837554/bubble_xssqyw.svg"
        alt="speech bubble icon"
        className={classes.speechBubble}
      />
      <Typography variant="h2">
        Converse with anyone <br /> with any language.
      </Typography>
    </Grid>
  );
};

export default Hero;
