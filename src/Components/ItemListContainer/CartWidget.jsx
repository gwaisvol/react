import React from 'react'
import { useContext } from 'react';
import { cartContext } from "../../context/cartContext"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
  const {getTotalItemCount} = useContext(cartContext);

  return (
    <div>
        <FontAwesomeIcon icon={faBagShopping}/>
        <a href="/cart">
        <span>{getTotalItemCount() > 0 && getTotalItemCount()}</span>
        </a>
    </div>
  )
}

export default CartWidget