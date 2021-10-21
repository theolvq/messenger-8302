import { Box, Typography } from "@material-ui/core";
import React from "react";
import AttachedImages from "./AttachedImages";

const Bubble = (props) => {
  const { attachments, text, classes } = props;
  return (
    <Box className={classes.bubble}>
      {attachments ? (
        <>
          {attachments.length > 1 && (
            <Typography className={classes.text}>{text}</Typography>
          )}
          <AttachedImages attachments={attachments} text={text} />
          {attachments.length === 1 && (
            <Typography className={classes.text}>{text}</Typography>
          )}
        </>
      ) : (
        <Typography className={classes.text}>{text}</Typography>
      )}
    </Box>
  );
};

export default Bubble;
