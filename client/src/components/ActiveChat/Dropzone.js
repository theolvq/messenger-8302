import React, { useCallback } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import { useDropzone } from "react-dropzone";
import { uploadImages } from "../../store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  uploadButton: {
    marginLeft: "1rem",
  },
}));

const Dropzone = (props) => {
  const classes = useStyles();
  const { setAttachments } = props;

  const onDrop = useCallback(
    async (images) => {
      const urls = await Promise.all(await uploadImages(images));
      setAttachments((prev) => prev.concat(urls));
    },
    [setAttachments]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Button className={classes.uploadButton} {...getRootProps()}>
      <input {...getInputProps()} />
      <Image color="secondary" />
    </Button>
  );
};

export default Dropzone;
