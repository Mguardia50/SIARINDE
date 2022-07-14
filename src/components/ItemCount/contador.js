import { useState } from 'react'
/* import { contextProductos } from '../API/ListaDeProductos'; */
import CustomProvider from '../API/ListaDeProductos';
import { cartContext } from '../API/ListaDeProductos';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link} from "react-router-dom";

export const UsarContador = ({stock, initial, onAdd}) => {
    
    

    const parametroId = useParams();
    const idDelProducto = parametroId.tiendaId
    /*  const {productosDetallados, setProductosDetallados} = useContext(contextProductos) */
     const {addProduct, isInCart} = useContext(cartContext)

     /* const busquedaStock = productosDetallados.find((elemento) => elemento.id == parametroId.tiendaId) */
     /* console.log("el producto detallado es " + JSON.stringify(productosDetallados) )
     console.log("mientras que el resultado de busqueda es " + JSON.stringify(resultadoBusqueda)) */
  
     
    //const productoFiltrado = new busquedaStock ()
    

    /* stock = busquedaStock.stock */ 
    /* console.log("el stock es " + stock) */
    const [newStock, setStock] = useState(stock)
    const [contador, setContador] = useState(initial)
    

    const agregar = () => {
        /* console.log(contador)
        console.log(stock) */
        
        if (isInCart(idDelProducto)){
            
            return

        }

        if (contador < newStock) {
            setContador(contador + 1); 
        }
        else{
            console.log("No hay más stock");
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

     function agregarCarrito() {
        
        //Ahora necesito que en el objeto se remplace el stock existente con el nuevo
        //e.preventDefault() -> si hago esto, no va al link

        /* isInCart(idDelProducto) ? console.log("ya esta en el carrito") : addProduct(contador, idDelProducto);
 */

        if (isInCart(idDelProducto)){

            console.log("ya esta en el carrito")
            return

        }

            addProduct(contador, idDelProducto);
            
            setStock(newStock - contador);
            const stockActual = newStock - contador;
            console.log("el stock era de " + newStock + ", ahora es de " + stockActual)
            setContador(0);
        
        
        
    } 

    

    return {
        agregar, quitar, agregarCarrito, contador, onAdd, newStock
    }
}