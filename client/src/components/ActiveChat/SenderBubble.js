import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import AttachedImages from "./AttachedImages";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
    textAlign: "right",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.bubble}>
        {(!attachments || attachments.length > 1) && (
          <Typography className={classes.text}>{text}</Typography>
        )}
        {attachments && (
          <AttachedImages attachments={attachments} text={text} />
        )}
        {attachments && attachments.length === 1 && (
          <Typography className={classes.text}>{text}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SenderBubble;
