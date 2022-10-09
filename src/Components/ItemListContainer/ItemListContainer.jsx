import React, {useState, useEffect } from "react";
import Item from "../Item/Item";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import {getProductos} from '../mockAPI/mockAPI';
import ItemList from "./ItemList";
import ItemCount from "../ItemCount/ItemCount";
let misEstilos = { backgroundColor: "lightblue"};


function ItemListContainer(props) {
  const [productosList, setProductosList] = useState([]);

  useEffect(
    () => {
      getProductos().then((data) => {
       setProductosList(data);
     });
    },[]
    )

  return (
  <>
  <h1>{props.greetings}</h1>
  <ItemList productosList={productosList}/>
  <hr/>
  <ItemCount text={"Agregar al carrito"} initial={1} stock={22} />
 </>
  )
}

export default ItemListContainer