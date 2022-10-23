import React from 'react'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react';
import { cartContext } from "../../context/cartContext"
import {Link} from 'react-router-dom';

export function ItemDetail ({ producto }){
const [count,setCount] = useState(0);
const {addToCart,removeItem} = useContext(cartContext);

  function handleAddToCart(count){
    addToCart(producto,count)
    setCount(count);
  }
  
  return (
    <div>
      <img src={producto.img} alt={producto.title}/>
      <h2>{producto.title}</h2>
      <p>{producto.detail}</p>
      <p>${producto.price}</p>   
      {count === 0 ? (
      <ItemCount onAddToCart={handleAddToCart} initial={1} stock={producto.stock} text={'Agregar al carrito'}/>
      ) : (
        <Link to={`/cart`}>Ver el carrito</Link>
      )}
      <button onClick={()=> removeItem(producto.id)}>Eliminar</button>
      </div>
  );
 
}
