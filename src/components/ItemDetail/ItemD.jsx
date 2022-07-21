import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./style.css";
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';


    const ItemD = ({product}) =>{

        const [isAdded, setIsAdded] = useState(null)

        /* console.log("emmmmm estemmmm emmmm " + product.Stock) funciona, me muestra el stock bien */

        function addHandler(qtyToAdd){
            setIsAdded(qtyToAdd) //esto es lo que pongo como "onAdd(contador)"
            console.log("este valor de handler seria " + qtyToAdd)
        }

        

        return(
        <>
        
            <div className='itemDetailBox'>
                <h3 className='tituloDetail'>{product.Nombre}</h3>
                <div className='imgDetailBox'>
                   <img src={product.Imagen} alt="" className='imgDetailTienda'/>
                    <Pagination count={4} showFirstButton showLastButton />
                </div> 
                <p className='parrafoDetailBox'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur minima earum laborum rem rerum veniam pariatur totam reprehenderit, quaerat modi illum consequuntur voluptates, quibusdam sequi eligendi asperiores, voluptas sed. - {product.Descripcion} - stock: {product.stock} unidades</p>  
                
                    {/* <button className='botonDetailBox'>Agregar al Carrito</button> */}
                
                
                <div className='boxDetailCarrito'>
                    <div className='divItemCount'>
                        <ItemCount initial={1} stock={product.Stock} onAdd={addHandler}></ItemCount>
                    </div>              
                    
                    <ul>
                        <li>Precio Unitario: ${product.Precio}</li>
                        <li>Precio Total:</li>
                    </ul>
                </div>
            </div>
    
        </>
        )
    
    
    
    }

    export default ItemD