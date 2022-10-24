import React from "react";
import { createContext,useState } from "react";

const cartContext = createContext();

function CartContextProvider (props) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, count) => {
        if (isInCart(item.id)) {
         setCart(cart.map(producto => {
            return producto.id === item.id ? { ...producto, count: producto.count + count } : producto
            }));
     } else {
          setCart ([...cart, { ...item, count }]);
     }

}


const getTotalPrice = () => {
    return cart.reduce((prev, act) => prev + act.count * act.price, 0);
 }

    function getTotalItemCount(){
        let total = 0;
        cart.forEach( itemInCart => {
         total = total + itemInCart.count
        })
        return total;
        }

        function removeItem(idToRemove){
            let newCart = cart.filter(itemInCart => (itemInCart.id !== idToRemove))
             setCart(newCart);
            }

    const isInCart = (id) => cart.find(item => item.id === id) ? true: false;

    return (
        <>
        <cartContext.Provider value={{cart, addToCart, getTotalItemCount, removeItem, isInCart, getTotalPrice}}>
        {props.children}
        </cartContext.Provider>
        
        </>
    )
}

export {cartContext, CartContextProvider} ;
