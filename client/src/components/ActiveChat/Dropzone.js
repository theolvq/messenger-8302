import React, { useCallback } from "react";
import axios from "axios";
import { Button, makeStyles } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import { useDropzone } from "react-dropzone";

const useStyles = makeStyles(() => ({
  uploadButton: {
    marginLeft: "1rem",
  },
}));

const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

const Dropzone = (props) => {
  const classes = useStyles();
  const { setAttachments } = props;

  const uploadImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", PRESET);
      formData.append("folder", "messenger-hatchways");

      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/daawascript/upload",
        formData
      );
      return data.secure_url;
    } catch (err) {
      console.error(err);
    }
  };

  const onDrop = useCallback(
    (images) => {
      images.forEach((image) => {
        const reader = new FileReader();

        reader.onload = async () => {
          const url = await uploadImage(image);
          setAttachments((prev) => prev.concat(url));
        };
        reader.readAsArrayBuffer(image);
      });
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
