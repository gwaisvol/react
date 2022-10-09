import React from "react";
import Button from "../Button/Button";
import "./item.css";

export default function Item(props) {
  console.log(props);

  return (
    <>
      <div className="Item">
        <div className="Item-img">
          <img src={props.img} alt=""></img>
        </div>
        <div className="Item-detail">
          <h2>{props.title}</h2>
          <p>{props.detail}</p>
          <h4>$ {props.price}</h4>
        </div>

        <Button otraprop="otraprop">{`Comprar ${props.title}`}</Button>
      </div>
    </>
  );
}


