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

      /*   console.log("el total es: $" + totalPesos); */
        return totalPesos
    }
    

    compras.forEach(element => sumarTotal(element));


    return (
    
    <>
        <h1>Tus compras</h1>

        <div className="CartBoxContainer">
            <CartBox></CartBox>
            <p className={`${totalPesos == 0 ? "ninguna" : "TotalCompra"}`}>El total de la compra es: ${totalPesos}</p>
        </div>
        <div className="botonesCarrito">
            <Link to="/tienda/general"><button className='btnVolverTG'>{totalPesos== 0 ? "IR A COMPRAR" : "SEGUIR COMPRANDO"}</button></Link>
{/*             {<Link className={`${totalPesos == 0 ? "ninguna" : ""}`} to="/finalizarPedido"><button className='btnVolverTG'>FINALIZAR COMPRA</button></Link>} */}
            {<Link className={`${totalPesos == 0 ? "ninguna" : ""}`} to="/finalizarPedido"><SubirCompra></SubirCompra></Link>}
        </div>
        
        <h4>NOTA: si bien se arreglo el windows reload, ahora hay que arreglar esta pagina</h4>
        <img src= "https://th.bing.com/th/id/OIP.Pp1Tc5jNRnIemavypChIXAAAAA?w=212&h=180&c=7&r=0&o=5&pid=1.7" className="imagenPedorra"></img>
    </>
    
    
    
    )   
  }

  export default CartComprado

