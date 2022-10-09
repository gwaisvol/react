import React from 'react'
import Item from "../Item/Item"
import FlexWrapper from '../FlexWrapper/FlexWrapper'


function ItemList(props) {
  return <>
<FlexWrapper>
  { props.productosList.map( (producto) => { 
 return <Item 
 key={producto.id}
 title={producto.title}
 img={producto.img}
 price={producto.price}
 detail={producto.detail}
 />;
} ) }
  </FlexWrapper>
  
  
  </>
}

export default ItemList