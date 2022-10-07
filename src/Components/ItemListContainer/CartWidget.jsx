import React from 'react'
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div>
        <FontAwesomeIcon icon={faBagShopping}/>
    </div>
  )
}

export default CartWidget