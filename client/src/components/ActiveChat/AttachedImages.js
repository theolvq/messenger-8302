import React from "react";
import { ImageList, ImageListItem } from "@material-ui/core";
import { Image, Transformation } from "cloudinary-react";

const AttachedImages = (props) => {
  const { attachments, text } = props;

  const hasTextAndOneAttachment = text && attachments.length === 1;

  const radius = hasTextAndOneAttachment ? "0:10:0:0" : "0:10:0:10";
  const height = hasTextAndOneAttachment ? 113 : 150;
  const width = hasTextAndOneAttachment ? 173 : "auto";

  return (
    <ImageList cols={attachments.length} rowHeight={height}>
      {attachments.map((attachment) => (
        <ImageListItem key={attachment}>
          <Image
            publicId={attachment.slice(52)}
            alt={attachment}
            loading="lazy"
            quality="auto:good"
            fetchFormat="auto">
            <Transformation
              height={height}
              width={width}
              crop="fill"
              gravity="north"
              radius={radius}
            />
          </Image>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default AttachedImages;
