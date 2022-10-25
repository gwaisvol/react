import React,{useContext} from 'react';
import { cartContext } from "../../context/cartContext"
import {FlexWrapper} from '../FlexWrapper/FlexWrapper';
import { createBuyOrder } from '../../services/firebase';
import Button from '../Button/Button';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



function CartView() {
const { cart , removeItem, getTotalPrice } = useContext(cartContext);
function handleCheckout(){
    const buyerData = {
    name: "German",
    email:"german_waisvol@hotmail.com",
    phone: "1111111"
    }

    const orderData = {
        buyerData: buyerData,
        cart: cart,
        total: getTotalPrice(),
    }

    createBuyOrder(orderData).then ( respuesta => {
   {/*  Swal.fire({
          title: 'Compra finalizada!',
          text: 'Compra finalizada. Que la disfrutes',
          icon: 'cart',
          confirmButtonText: 'Cool'
        })  */}
    } );
        
}
return <FlexWrapper>
{ cart.map( producto => (
 <div key={producto.id}>
 <h2>{producto.title}</h2>
 <h4>{producto.price}</h4>
 <h4>{producto.count}</h4>
 <h4>Precio Total: ${producto.price * producto.count}</h4>
<button onClick={()=>removeItem(producto.id)}>X</button>
</div>
))}
<div><h2>Precio total de la compra:{getTotalPrice()} </h2></div>
<Button onClick={handleCheckout}>Finalizar Compra</Button>
</FlexWrapper>
}

export default CartView