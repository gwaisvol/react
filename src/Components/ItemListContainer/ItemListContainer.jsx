import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getCategory} from '../mockAPI/mockAPI';
import ItemList from "./ItemList";
import { Loader} from "../Loader/Loader"
import { getProductos } from "../../services/firebase";



function ItemListContainer(props) {
  const [productosList, setProductosList] = useState([]);
  const {categoryID}= useParams()
  useEffect(() => {
    setProductosList([]);
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
  { productosList.length ?
  <ItemList productosList={productosList}/>
  :
  <Loader/>
  }
  <hr/>
 </>
  )
}

export default ItemListContainer