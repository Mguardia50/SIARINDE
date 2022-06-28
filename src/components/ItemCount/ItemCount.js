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
   /*  
    ESTO LO DEJO TEMPORALMENTE, PERO LO PASE A OTRO ARCHIVO A MODO DE PRUEBA Y PORQUE ES BUENA PRACTICA

    const [contador, setContador] = useState(initial);

    const agregar = () => {

        if (contador < stock) {
            setContador(contador + 1); 
        }
        else{
            console.log("Máximo stock alcanzado");
        }

    }

    const quitar = () => {

        if (contador >0){
            setContador(contador - 1); 
        }
        else{
            console.log("no puede ser negativo");
        }
        

    }

    const agregarCarrito = () => {

        console.log(contador);
        
    } */

    return(
        <>
{/*          <main className='itemBoxContainer'>
            <div className='itemBox'>
                <h3>Pelotas de tenis HEAD</h3>
                <div className='imgBox'>
                    <img src={babolat} alt="" className='imgTienda'/>
                </div> 
                <p className='parrafoBox'>Pelotas de tenis babolat gold all courts, stock: {newStock}</p> 
                <div className='boxAgregarCarrito'>*/}     
                    <div className='boxContador'>
                        <IconButton onClick={quitar} sx={{ color: lightBlue[900] }}>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <input type="number" id='inputCantidad' value={contador}></input>
                        <IconButton onClick={agregar} color ="success" >
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </div>    
                    <IconButton onClick={agregarCarrito} fontSize ="large"  sx={{color: "black", marginLeft: '10px', backgroundColor: 'silver', border: '2px solid black' }}>
                        <AddShoppingCartIcon />
                    </IconButton>
            {/*   </div>
             </div>
        </main> */}
    </>
    )

}

export default ItemCount

