import React from "react";
import { useContext } from 'react';
import { Link} from "react-router-dom";
import { cartContext } from '../API/ListaDeProductos';
import CartBox from "./CartBox";
import SubirCompra from "./SubirCompra";

function CartComprado() {

    let totalPesos = 0

    const {compras} = useContext(cartContext)


    function sumarTotal (element) {
        totalPesos += element.precio * element.cantidad;

        return totalPesos
    }
    

    compras.forEach(element => sumarTotal(element));


    return (
    
    <>
        <h1>Tus compras</h1>

        <div className="CartBoxContainer">
            <CartBox></CartBox>
            <p className={`${totalPesos === 0 ? "ninguna" : "TotalCompra"}`}>El total de la compra es: ${totalPesos}</p>
        </div>
        <div className="botonesCarrito">
            <Link to="/tienda/general"><button className='btnVolverTG'>{totalPesos === 0 ? "IR A COMPRAR" : "SEGUIR COMPRANDO"}</button></Link>
           {<Link className={`${totalPesos === 0 ? "ninguna" : ""}`} to="/finalizarPedido"><SubirCompra></SubirCompra></Link>}
        </div>
        
    </>
    
    
    
    )   
  }

  export default CartComprado

