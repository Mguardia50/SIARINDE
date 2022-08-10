import React from "react";
import "./style.css";
import { useContext, useState } from 'react';
import { Link} from "react-router-dom";
import { cartContext } from '../API/ListaDeProductos';
import SubirCompra from "./SubirCompra";

function CartComprado() {

    let totalPesos = 0

    const {compras} = useContext(cartContext)
    const {eliminarProducto} = useContext(cartContext)
    const [cantidad, setCantidad] = useState()

    function sumarTotal (element) {
        totalPesos += element.precio * element.cantidad;

        return totalPesos
    }
    

    compras.forEach(element => sumarTotal(element));


    return (
    
    <>
        <h1>Tus compras</h1>

        <div className="CartBoxContainer">
                {compras.map(compra =>
                    <div className="boxCart" key={compra.id} >
                        <div className="boxAQ"> 
                            <p>{compra.Nombre}</p>
                            <button className={`${compra.cantidad === 1 ? "ninguna" : "btnQuitar"}`} onClick={() => {compra.cantidad -= 1;setCantidad(compra.cantidad);console.log(JSON.stringify(compra))}}>{`[-]`}</button>
                            <p>{compra.cantidad}</p>
                            <button className="btnQuitar" onClick={() => {compra.cantidad += 1;setCantidad(compra.cantidad)}}>{`[+]`}</button>
                        </div>
                        <p>TOTAL: ${compra.precio * compra.cantidad}</p>
                        <button className="btnQuitar" onClick={() => eliminarProducto(compra.id, compra.stock)}>Eliminar</button>
                    </div>
                           
                )}
        <p className={`${totalPesos === 0 ? "ninguna" : "TotalCompra"}`}>EL TOTAL DE LA COMPRA ES ${totalPesos}</p>

        
            
        </div>
        <div className="botonesCarrito">
            <Link to="/tienda/general"><button className='btnVolverTG'>{totalPesos === 0 ? "IR A COMPRAR" : "SEGUIR COMPRANDO"}</button></Link>
           <div className={`${totalPesos === 0 ? "ninguna" : ""}`}><SubirCompra montoFinal={totalPesos}></SubirCompra></div>
        </div>
        
    </>
    
    
    
    )   
  }

  export default CartComprado

