import React from 'react';
import "./style.css";
import ItemCount from '../ItemCount/ItemCount';
import { Link} from "react-router-dom";

    const Item = ({product}) =>{
        
       
        return(
        <>
        
            <div className='itemBox'>
                <div>
                    <h3>{product.Nombre}</h3>
                    <div className='imgBox'>
                        <img src={product.Imagen} alt="" className='imgTienda'/>
                    </div> 
                </div>
                
                <p className='parrafoBox'>$ {product.Precio} - {product.Descripcion} stock: {product.stock}</p>  
                <div className='boxAgregarCarrito'>              
                <Link to={`/tienda/general/${product.id}`}><button className='botonBox'>COMPRAR</button></Link>
                </div>
            </div>
    
        </>
        )
    }
    
    
    

    export default Item

