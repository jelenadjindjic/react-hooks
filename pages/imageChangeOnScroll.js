import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[1725, 6548, 10803, 10808].map((speakerId) => {
        return (
          <div key={speakerId}>
            <ImageToggleOnScroll
              primary={`static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondary={`static/speakers/Speaker-${speakerId}.jpg`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
