import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({producto}) => {
  return (
    <div>
      <img src={producto.img} alt={producto.title}/>
      <h2>{producto.title}</h2>
      <p>{producto.detail}</p>
      <p>${producto.price}</p>   
      <ItemCount initial={1} stock={producto.stock} text={'Comprar'}/>
    </div>
  )
}
