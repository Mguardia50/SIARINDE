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
                <p className='parrafoDetailBox'>- {product.Descripcion} - stock: {product.Stock} unidades</p>  
                
                
                <div className='boxDetailCarrito'>
                    
                        <ItemCount initial={1} stock={product.Stock} product={product}></ItemCount>
                                
                    
                    <ul>
                        <li>Precio Unitario: ${product.Precio}</li>
                        
                    </ul>
                </div>
            </div>
    
        </>
        )
    
    
    
    }

    export default ItemD