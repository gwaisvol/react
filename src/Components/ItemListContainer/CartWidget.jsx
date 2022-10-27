import React from 'react'
import { useContext } from 'react';
import { cartContext } from "../../context/cartContext"



function CartWidget() {
  const {getTotalItemCount} = useContext(cartContext);

  return (
    <div>
        <a href="/cart">
      <span> 🛒 </span>
      <span>{getTotalItemCount() > 0 && getTotalItemCount()}</span>
        </a>
    </div>
  )
}

export default CartWidget