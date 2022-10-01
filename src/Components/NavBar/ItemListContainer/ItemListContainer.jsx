import React from 'react'
let misEstilos = { backgroundColor: "lightblue"};

function ItemListContainer(props) {
  return (
    <div style={misEstilos}>
        <h1>{props.greetings}</h1>
    </div>
  )
}

export default ItemListContainer