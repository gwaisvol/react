import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../mockAPI/mockAPI'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import FlexWrapper from '../FlexWrapper/FlexWrapper'


export const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({});
    const [feedbackMsg, setFeedbackMsg] = useState(null)
    const {id}=useParams()
    useEffect(() => {
      getOne(id)
      .then((res) => {
        setProducto(res);
      })
      .catch((error) => {
        setFeedbackMsg(error.message);
      });
     },[id]);
  return (
    <FlexWrapper>
    { feedbackMsg !== null
    ?
    <h4>Error: {feedbackMsg}</h4>
    :
    <ItemDetail producto={producto} />
    }
    </FlexWrapper>
  )
}

export default ItemDetailContainer;