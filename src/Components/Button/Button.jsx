import React from "react";
import "./button.css";


function Button(props) {
let colorBtn = {
  backgroundColor: "rgb (97, 50, 150)"
}

function handleClick(){
  colorBtn = {
    backgroundColor : "rgb(157 , 150, 00)"
  };
}

return(
  <button onClick={ handleClick } style={colorBtn} className="btn">
    {props.children}
  </button>
  );

}

export default Button;
