import React from 'react'
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { lightBlue } from '@mui/material/colors';
import { UsarContador } from './contador';
import { Link} from "react-router-dom";
import "./style.css"



const ItemCount = ({stock, initial, product}) => {
    const {agregar, quitar, AgregarCarrito, contador} = UsarContador({stock, initial, product}) 



    return(
        <>
            <div className='divItemCount'>
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
                    {contador ? <Link to="/tienda/cart"><IconButton  className="btnContador" onClick={AgregarCarrito}  sx={{ color: "black", marginLeft: '20px', marginBottom: '10px', backgroundColor: 'silver', border: '2px solid black' }}>
                        <AddShoppingCartIcon fontSize ="large"/>
                    </IconButton> </Link> : <Link to="/tienda/general"><button className='btnVolverTG'>VOLVER</button></Link>}
                    </>
            </div>         
                 <p className='precioTotal'>Precio TOTAL: {contador * product.Precio}</p>
    </>
    )

}

export default ItemCount

