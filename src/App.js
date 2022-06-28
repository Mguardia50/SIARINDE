import './App.css';
import React from "react";
import Header from './components/header/Header';
import Inicio from './components/body/Inicio';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

    const App = () =>{
      return (
      <> 
        <Header></Header>
        {/* <Inicio></Inicio> */}
        <ItemListContainer greetings="BIENVENIDO A SIaRINDE"></ItemListContainer>
      </>
      
      )   
    }

export default App