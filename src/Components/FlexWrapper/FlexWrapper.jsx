import React from "react";
import "./flexwrapper.css";

export  function FlexWrapper(props) {
  const classnameDiv = props.row === true? "FlexWrapper flex_rows" : "FlexWrapper flex_cols"
  
  return <div className={classnameDiv}>{props.children}</div>;
  }
  
  export default FlexWrapper
