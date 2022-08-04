import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import IconButton from '@mui/material/IconButton';


const CartWidget = ({numeroCarrito}) => {


        
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
