import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const Dropzone = () => {
  const uploadImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "preset1");
      formData.append("folder", "messenger-hatchways");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/daawascript/upload",
        formData
      );
      // setUploadedUrls((prev) => prev.concat(res.data.secure_url));
    } catch (err) {
      console.error(err);
    }
  };

  const onDrop = useCallback((images) => {
    images.forEach((image) => {
      const reader = new FileReader();

      reader.onload = async () => {
        console.log(image);
        await uploadImage(image);
      };
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <button>Drop your image(s) here</button>
      ) : (
        <button>
          Drag and drop images here or <br /> click to select images from your
          computer
        </button>
      )}
    </div>
  );
};

export default Dropzone;
