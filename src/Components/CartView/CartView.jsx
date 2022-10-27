import React,{useContext} from 'react';
import { cartContext } from "../../context/cartContext"
import {FlexWrapper} from "../FlexWrapper/FlexWrapper";
import  UserForm  from "../UserForm/UserForm"




function CartView() {

const { cart , removeItem, getTotalPrice, clearCart } = useContext(cartContext);



return (
<>
{cart.length ===0 ? <p>carrito vacio</p>
:
<FlexWrapper>
{ cart.map( producto => (
 <div key={producto.id}>
 <h2>{producto.title}</h2>
 <h4>{producto.price}</h4>
 <h4>{producto.count}</h4>
 <h4>Precio Total: ${producto.price * producto.count}</h4>
<button onClick={()=>removeItem(producto.id)}>X</button>
</div>
))}

<UserForm cart={cart} getTotalPrice={getTotalPrice} />
<button onClick={()=>clearCart()}>Vaciar carrito</button>
</FlexWrapper>
}
</>
)

}

export default CartView