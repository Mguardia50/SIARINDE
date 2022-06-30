import './App.css';
import React from "react";
import Header from './components/header/Header';
import Inicio from './components/body/Inicio';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

    const App = () =>{
      return (
      <> 
        <Header></Header>
        {/* <Inicio></Inicio> */}
        <ItemListContainer greetings="BIENVENIDO A SIaRINDE"></ItemListContainer>
        <ItemDetailContainer titulo="Producto Detallado (Se quita esto más adelante)"></ItemDetailContainer>
      </>
      
      )   
    }

export default App