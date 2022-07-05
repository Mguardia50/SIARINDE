import './App.css';
import React from "react";
import Header from './components/header/Header';
import Inicio from './components/body/Inicio';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

    const App = () =>{
      return (
      <> 
        
        <BrowserRouter>
          <Header></Header>

          <Routes>
            <Route path='/' element= {<ItemListContainer></ItemListContainer>}/>
            <Route path='/deporte/:deporteId' element={<ItemListContainer></ItemListContainer>} />
            <Route path='/tienda/:tiendaId' element={<ItemDetailContainer></ItemDetailContainer>} />
          </Routes>
        </BrowserRouter>
        {/* <Inicio></Inicio> */}
     {/*    <ItemListContainer greetings="BIENVENIDO A SIaRINDE"></ItemListContainer>
        <ItemDetailContainer titulo="Producto Detallado (Se quita esto más adelante)"></ItemDetailContainer>
      */} </>
      
      )   
    }

export default App