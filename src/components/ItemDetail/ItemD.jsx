import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./style.css";
import Pagination from '@mui/material/Pagination';


    const ItemD = ({product}) =>{
        
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
                        <ItemCount></ItemCount>
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