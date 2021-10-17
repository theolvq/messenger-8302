import React from "react";
import { ImageList, ImageListItem } from "@material-ui/core";
import { Image, Transformation } from "cloudinary-react";

const AttachedImages = (props) => {
  const { attachments, text } = props;

  const radius = text && attachments.length === 1 ? "0:10:0:0" : "0:10:0:10";
  const height = text && attachments.length === 1 ? 113 : 150;
  const width = text && attachments.length === 1 ? 173 : "auto";

  return (
    <ImageList cols={attachments.length} rowHeight={height}>
      {attachments.map((attachment) => (
        <ImageListItem key={attachment}>
          <Image
            publicId={attachment.slice(52, -4)}
            alt={attachment}
            loading="lazy"
            quality="auto:good"
            fetchFormat="auto">
            <Transformation
              height={height}
              width={width}
              crop="fill"
              radius={radius}
            />
          </Image>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default AttachedImages;
// <Image
//   key={attachment}
//   publicId={attachment.slice(52)}
//   alt={attachment}
//   className={classes.image}>
//   <Transformation
//     width="auto"
//     height="150"
//     crop="lfill"
//     radius="0:10:10:0"
//   />
// <Transformation
//   color="#91A3C0"
//   overlay={{
//     fontFamily: "Open Sans",
//     fontSize: 14,
//     text: `${text}`,
//     fontWeight: "semibold",
//     letterSpacing: "-0.2",
//   }}
// />
// <Transformation
//   flags="layer_apply"
//   gravity="south_east"
//   y="-0.15"
// />
// </Image>
