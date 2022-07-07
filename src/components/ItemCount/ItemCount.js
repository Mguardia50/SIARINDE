import React from 'react'
import babolat from "../../assets/BabolatGold.png";
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {grey, lightBlue } from '@mui/material/colors';
import CartWidget from '../header/CartWidget';
import { UsarContador } from './contador';
import "./style.css"

const primary = grey[900];




const ItemCount = ({stock, initial}) => {
    const {agregar, quitar, agregarCarrito, contador, newStock} = UsarContador({stock, initial}) //algo aca no esta bien....


    return(
        <>
  
                    <div className='boxContador'>
                        <IconButton onClick={quitar} sx={{ color: lightBlue[900] }}>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <input type="number" id='inputCantidad' value={contador}></input>
                        <IconButton onClick={agregar} color ="success" >
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </div>    
                    <IconButton onClick={agregarCarrito}   sx={{ color: "black", marginLeft: '20px', marginBottom: '10px', backgroundColor: 'silver', border: '2px solid black' }}>
                        <AddShoppingCartIcon fontSize ="large"/>
                    </IconButton>
      
    </>
    )

}

export default ItemCount

