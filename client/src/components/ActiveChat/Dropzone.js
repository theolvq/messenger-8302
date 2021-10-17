import axios from "axios";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = (props) => {
  const { setAttachments } = props;

  const uploadImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "preset1");
      formData.append("folder", "messenger-hatchways");

      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/daawascript/upload",
        formData
      );
      console.log("uploadImage data", data);
      return data.secure_url;
    } catch (err) {
      console.error(err);
    }
  };

  const onDrop = useCallback(
    (images) => {
      images.forEach((image) => {
        const reader = new FileReader();

        // reader.onabort = () => console.log("file reading was aborted");
        // reader.onerror = () => console.log("file reading has failed");
        reader.onload = async () => {
          console.log("image", image);
          const url = await uploadImage(image);
          console.log("url", url);
          setAttachments((prev) => prev.concat(url));
        };
        reader.readAsArrayBuffer(image);
      });
    },
    [setAttachments]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <button type="button">Drop your image(s) here</button>
      ) : (
        <button type="button">
          Drag and drop images here or <br /> click to select images from your
          computer
        </button>
      )}
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     uploadImage: (image) => {
//       dispatch(uploadImage(image));
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(Dropzone);
export default Dropzone;
