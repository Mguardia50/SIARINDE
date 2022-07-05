import React from 'react';
import "./style.css";
import ItemCount from '../ItemCount/ItemCount';

    const Item = ({product}) =>{
        
       
        return(
        <>
        
            <div className='itemBox'>
                <h3>{product.Nombre}</h3>
                <div className='imgBox'>
                   <img src={product.Imagen} alt="" className='imgTienda'/>
                </div> 
                <p className='parrafoBox'>$ {product.Precio} - {product.Descripcion} stock: {product.stock}</p>  
                <div className='boxAgregarCarrito'>              
                <button className='botonBox'>Agregar</button>
                </div>
            </div>
    
        </>
        )
    }
    
    
    

    export default Item
