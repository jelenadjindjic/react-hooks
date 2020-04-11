import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primary, secondary }) => {
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondary;
      }}
      onMouseOut={() => {
        imageRef.current.src = primary;
      }}
      src={primary}
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMouseOver;
