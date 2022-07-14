import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, {Component} from 'react';
import IconButton from '@mui/material/IconButton';
import { UsarContador } from '../ItemCount/contador';

const CartWidget = ({numeroCarrito}) => {
    /* const {final} = UsarContador({stock, inicial}) */
    
        /* setTimeout(() =>{
            console.log("hola, la promesa se resolvio correctamente");
            const cuentaFinal = document.getElementById("inputCantidad");
            final = cuentaFinal.value
            console.log(final)
        }, 2000) */

        
    return(
        <>
            <IconButton color="primary" aria-label="add to shopping cart">
                <ShoppingCartIcon color="success" fontSize="large"></ShoppingCartIcon>
                <p>{numeroCarrito}</p>
            </IconButton>
        </>
    )
      
}

export default CartWidget
