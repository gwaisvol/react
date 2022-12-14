
import React from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./Components/NavBar/NavBar";
import { CartContextProvider } from './context/cartContext';
import { sendDataToFirebase } from './services/firebase';



//1-Importo los componentes de react-router-dom
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CartView from './Components/CartView/CartView';


function App() {

  let misEstilos = { backgroundColor: "lightblue" };
  //2-Contengo mi aplicación con el BrowerRouter.
  //3-Definimos nuestras rutas con <Routes> y <Route>.
  return (
    <div style={misEstilos}>
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="Alzstore, página especializada en venta de productos para pacientes con Alzheimer"/>} />
        <Route path="/category/:categoryID" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView/>} />
        <Route path="*" element={<h4>Página no encontrada, Error 404"</h4>} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
