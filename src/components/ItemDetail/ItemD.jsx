import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./style.css";
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';


    const ItemD = ({product}) =>{

        const [isAdded, setIsAdded] = useState(null);
       


        function addHandler(qtyToAdd){
            setIsAdded(qtyToAdd) 
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
                
                
                <div className='boxDetailCarrito'>
                    <div className='divItemCount'>
                        <ItemCount initial={1} stock={product.Stock} onAdd={addHandler} product={product}></ItemCount>
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