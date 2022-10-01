import React from 'react';
import ItemListContainer from './Components/NavBar/ItemListContainer/ItemListContainer';
import NavBar from "./Components/NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Alzstore, página especializada en venta de productos para pacientes con Alzheimer"/>
    </div>
  );
}

export default App;
