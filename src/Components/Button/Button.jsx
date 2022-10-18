import React from "react";
import { useState } from "react";
import "./button.css";


function Button(props) {
  const [colorBtn, setColorBtn] = useState({backgroundColor: props.color})

function handleClick(){
  if (props.onClick) props.onClick();
  setColorBtn({backgroundColor : "rgb(255 , 50, 50)"});
}

return(
 
  <button onClick={handleClick} style={colorBtn} className="btn">
    {props.children}
  </button>
  );

}

export default Button;
