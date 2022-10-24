import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../../services/firebase'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'
import FlexWrapper from '../FlexWrapper/FlexWrapper'


export const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({});
    const [feedbackMsg, setFeedbackMsg] = useState(null)
    const [loading,setLoading] = useState(true)
    const {id}=useParams()
    useEffect(() => {
      getOne(id)
      .then((res) => {
        if (res !== undefined) {
        setProducto(res);
        }else {
         throw new Error()
        }
      })
      .catch(() => setFeedbackMsg('Producto inexistente'))
      .finally(()=> setLoading(false))
     },[id]);
  return (
    <FlexWrapper>
    {loading ? <Loader/> :feedbackMsg
    ?
    <h4>Error: {feedbackMsg}</h4>
    :
    <ItemDetail producto={producto} />
    }
    </FlexWrapper>
  )
}

export default ItemDetailContainer;