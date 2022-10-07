import { dom } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from "./Components/NavBar/NavBar";
import Card from './Components/Card/Card';

//1-Importo los componentes de react-router-dom
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

  let misEstilos = { backgroundColor: "lightblue" };
  //2-Contengo mi aplicación con el BrowerRouter.
  //3-Definimos nuestras rutas con <Routes> y <Route>.
  return (
    <div style={misEstilos}>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="Alzstore, página especializada en venta de productos para pacientes con Alzheimer"/>} />
        {/* Descomentar lo siguiente cuando termine de ver la clase 3: <Route path="/productos/:id" element={<ItemDetailContainer />}></Route> */}
        {/* Descomentar lo siguiente cuando termine de ver la clase 3: <Route path="*" element={<h4>Página no encontrada, Error 404}></Route> */}
        {/* Descomentar lo siguiente cuando termine de ver la clase 3: <Route path="/category/:categoryID" element={<ItemListContainer /></Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
