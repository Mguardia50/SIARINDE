import React from 'react';
import "./style.css";
import { Link} from "react-router-dom";
import { cartContext } from '../API/ListaDeProductos';
import { useContext } from 'react';

    const Item = ({product}) =>{
        
        const {isInCart} = useContext(cartContext)

        if (isInCart(product.id)){
            return
        }
        return(
        <>
        
            <div className='itemBox'>
                <div>
                    <h3>{product.Nombre}</h3>
                    <div className='imgBox'>
                        <img src={product.Imagen} alt="" className='imgTienda'/>
                    </div> 
                </div>
                
                <p className='parrafoBox'> {product.Descripcion} - ${product.Precio} - Stock: {product.Stock}</p>  
                <div className='boxAgregarCarrito'>              
                <Link to={`/tienda/general/${product.id}`}><button className='botonBox'>COMPRAR</button></Link>
                </div>
            </div>
    
        </>
        )
    }
    
    
    

    export default Item

