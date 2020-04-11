import React, { useEffect } from "react";

const Syntax = () => {
  useEffect(() => {
    console.log("Use effect");
    return () => {
      console.log("use effects cleanup");
    };
  });

  return <div></div>;
};

export default Syntax;
