import React,{useContext} from 'react';
import { cartContext } from "../../context/cartContext"
import {FlexWrapper} from '../FlexWrapper/FlexWrapper';

function CartView() {
const { cart , removeItem, getTotalPrice } = useContext(cartContext);
return <FlexWrapper>
{ cart.map( producto => (
 <div>
 <h2>{producto.title}</h2>
 <h4>{producto.price}</h4>
 <h4>{producto.count}</h4>
 <h4>Precio Total: ${producto.price * producto.count}</h4>
<button onClick={()=>removeItem(producto.id)}>X</button>
<div><h2>Precio total de la compra:{getTotalPrice()} </h2></div>
</div>

))}
</FlexWrapper>
}

export default CartView