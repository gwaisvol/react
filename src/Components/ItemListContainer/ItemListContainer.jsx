import React, {useState, useEffect } from "react";
import {getProductos} from '../mockAPI/mockAPI';
import { useParams } from "react-router-dom";
import {getCategory} from '../mockAPI/mockAPI';
import ItemList from "./ItemList";
let misEstilos = { backgroundColor: "lightblue"};


function ItemListContainer(props) {
  const [productosList, setProductosList] = useState([]);
  const {categoryID}= useParams()
  useEffect(() => {
    if(categoryID) {
      getCategory(categoryID).then((data)=> setProductosList(data))
     }else{
      getProductos().then((data) => {
       setProductosList(data);
     });
    }
    },[categoryID])

  return (
  <>
  <h1>{props.greetings}</h1>
  <ItemList productosList={productosList}/>
  <hr/>
  {/*<ItemCount text={"Agregar al carrito"} initial={1} stock={22} />*/}
 </>
  )
}

export default ItemListContainer