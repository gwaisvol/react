import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./item.css";

export default function Item(props) {

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
        <Link to={`/Item/${props.id}`} >
        <Button otraprop="otraprop">{`Comprar ${props.title}`}</Button>
        </Link>
      </div>
    </>
  );
}


