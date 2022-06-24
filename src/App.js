import './App.css';
import React from "react";
import Header from './components/header/Header';
import Inicio from './components/body/Inicio';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
    
    const App = () =>{
      return (
      <> 
        <Header></Header>
        {/* <Inicio></Inicio> */}
        <ItemListContainer greetings="Bienvenido a Siarinde"></ItemListContainer>
      </>
      
      )   
    }

export default App