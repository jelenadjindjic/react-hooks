import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnIndexHover = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primary="../static/file_example_JPG_100kB.jpg"
        secondary="../static/photo-1534515477625-bd6aceca0885.jpeg"
        width="50"
        height="50"
      />{" "}
      <br />
      <ImageToggleOnMouseOver
        primary="../static/SampleJPGImage_50kbmb.jpg"
        secondary="../static/photo-1565028832942-d005b1bd84f0.jpeg"
        width="50"
        height="50"
      />
    </div>
  );
};

export default ImageChangeOnIndexHover;
