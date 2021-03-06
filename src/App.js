import './App.css';
import React from "react";
import Header from './components/header/Header';
import Inicio from './components/body/Inicio';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Futbol from './paginas/futbol/futbol';
import Gimnasio from './paginas/gimnasio/gimnasio';
import Paddle from './paginas/paddle/paddle';
import Tenis from './paginas/tenis/tenis';
import FinalizarPedido from './paginas/finalizarPedido/finalizarPedido';
import Running from './paginas/running/running';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CustomProvider from './components/API/ListaDeProductos';
import CartComprado from './components/cart/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

    const App = () =>{
      return (
      <CustomProvider>
        
        <BrowserRouter>
          <Header></Header>

          <Routes>
            
            <Route path='/' element= {<Inicio></Inicio>}/>
            <Route path='/deporte/tenis' element={<Tenis></Tenis>} />
            <Route path='/deporte/gimnasio' element={<Gimnasio></Gimnasio>} />
            <Route path='/deporte/running' element={<Running></Running>} />
            <Route path='/deporte/paddle' element={<Paddle></Paddle>} />
            <Route path='/deporte/futbol' element={<Futbol></Futbol>} />
            <Route path='/tienda/:categoria' element={<ItemListContainer></ItemListContainer>} />
            <Route path='/tienda/general/:tiendaId' element={<ItemDetailContainer></ItemDetailContainer>} />
            <Route path='/tienda/cart' element={<CartComprado></CartComprado>} />
            <Route path='/finalizarPedido' element={<FinalizarPedido></FinalizarPedido>} />
          </Routes>
        </BrowserRouter>
        
      </CustomProvider> 
      
      )   
    }

export default App