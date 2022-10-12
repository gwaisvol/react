import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../mockAPI/mockAPI'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({})
    const {id}=useParams()
    useEffect(() =>{
getOne(id)
.then((res)=>setProducto(res))
    },[])
  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer;