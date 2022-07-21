import React from 'react'
import babolat from "../../assets/BabolatGold.png";
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {grey, lightBlue } from '@mui/material/colors';
import CartWidget from '../header/CartWidget';
import { UsarContador } from './contador';
import { Link} from "react-router-dom";
import "./style.css"

const primary = grey[900];




const ItemCount = ({stock, initial, onAdd}) => {
    const {agregar, quitar, agregarCarrito, contador, newStock} = UsarContador({stock, initial, onAdd}) //algo aca no esta bien....

    /* console.log("qerty el stock es " + stock ) hasta aca vamos bien */




    return(
        <>
  
                    <div className='boxContador'>
                        <IconButton onClick={quitar} className="btnContador" sx={{ color: lightBlue[900] }}>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        {contador? <input type="number" id='inputCantidad' value={contador}></input> : <p></p>}
                        <IconButton onClick={agregar} className="btnContador" color ="success" >
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </div>
                    <>  
                    {contador ? <Link to="/tienda/cart"><IconButton  className="btnContador" onClick={agregarCarrito}  sx={{ color: "black", marginLeft: '20px', marginBottom: '10px', backgroundColor: 'silver', border: '2px solid black' }}>
                        <AddShoppingCartIcon fontSize ="large"/>
                    </IconButton> </Link> : <Link to="/tienda/general"><button className='btnVolverTG'>VOLVER</button></Link>}
                    {/* onClick={onAdd(contador)} esto lo eliminamos */}
                    {/* <Link to="/tienda/cart"> */}
                    </>  
                 
    </>
    )

}

export default ItemCount

