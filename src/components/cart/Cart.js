import React from "react";
import { useContext } from 'react';
import { cartContext } from '../API/ListaDeProductos';
import { Link} from "react-router-dom";

function CartComprado() {

    const {compras} = useContext(cartContext)
    const comprasArrayiados = JSON.stringify(compras)

    return (
    
    <>
        <h1>Tus compras</h1>
        <p>{comprasArrayiados}</p>
        <Link to="/tienda/general"><button className='btnVolverTG'>SEGUIR COMPRANDO</button></Link>
        <h4>NOTA: por ahora hace un refreshPage lo que borra la memoria cache si 
            clickeas en TIENDA o en categoria, por lo que tengo que arreglarlo, por ahora usar los botones volver </h4>
        <img src= "https://th.bing.com/th/id/OIP.Pp1Tc5jNRnIemavypChIXAAAAA?w=212&h=180&c=7&r=0&o=5&pid=1.7"></img>
    </>
    
    
    
    )   
  }

  export default CartComprado

