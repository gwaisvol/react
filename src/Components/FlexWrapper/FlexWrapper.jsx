import React from "react";
import "./flexwrapper.css";

function FlexWrapper(props) {
  return (
    <div>
      <div className="flex">{props.children}</div>
    </div>
  );
}

export default FlexWrapper;
