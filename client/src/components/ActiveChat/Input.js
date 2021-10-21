import React, { useState } from "react";
import { FormControl, FilledInput, Button, Grid } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { Image, Transformation } from "cloudinary-react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import Dropzone from "./Dropzone";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  imagePreview: {
    position: "relative",
    marginLeft: ".75rem",
  },
  deleteBtn: {
    position: "absolute",
    borderRadius: "50%",
    height: "24px",
    width: "24px",
    top: "-10px",
    right: "-10px",
  },
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [attachments, setAttachments] = useState([]);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments,
    };
    await postMessage(reqBody);
    setText("");
    setAttachments([]);
  };

  const deletePicture = (picId) => {
    setAttachments((prev) => prev.filter((picture) => picture !== picId));
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <>
              {attachments.map((image) => (
                <Grid key={image} className={classes.imagePreview}>
                  <Image publicId={image.slice(52)} alt={image}>
                    <Transformation height="60" crop="fill" radius="10" />
                  </Image>
                  <Button
                    className={classes.deleteBtn}
                    onClick={() => deletePicture(image)}>
                    <Cancel color="secondary" />
                  </Button>
                </Grid>
              ))}
              <Dropzone postion="end" setAttachments={setAttachments} />
            </>
          }
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
