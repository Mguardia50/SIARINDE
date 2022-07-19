import React from "react";
import { useContext } from 'react';
import { cartContext } from '../API/ListaDeProductos';
import "./style.css";


function CartBox() {

    const {eliminarProducto} = useContext(cartContext)
    const {compras} = useContext(cartContext)



/* 
    const comprasTotales = JSON.stringify(compras)

    console.log(comprasTotales) */
    
    
    return (
    
    <>

        {compras.map(compra =>
            <div className="boxCart">
            <p>{compra.Nombre}</p>,
            <p>TOTAL: ${compra.precio * compra.cantidad}</p>
            <button className="btnQuitar" onClick={() => eliminarProducto(compra.id)}>Eliminar</button>
        </div>
            
            
            
        )}

</>
    
    
    
    )   
  }

  export default CartBox

