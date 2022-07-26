import { useState } from 'react'
/* import { contextProductos } from '../API/ListaDeProductos'; */
import CustomProvider from '../API/ListaDeProductos';
import { cartContext } from '../API/ListaDeProductos';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';

export const UsarContador = ({stock, initial, onAdd, product}) => {
    
    
    const parametroId = useParams();
    const idDelProducto = parametroId.tiendaId
    /*  const {productosDetallados, setProductosDetallados} = useContext(contextProductos) */
     const {addProduct, isInCart} = useContext(cartContext)
   

    let newStock = stock
    const [contador, setContador] = useState(initial)
    const [idVenta, setIdVenta] = useState()
    

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

            /* const ventasCollection = collection(db, 'ventas');
            addDoc(ventasCollection, { 
                items: [{nombre: "cataplasma"}],
                fecha: serverTimestamp(),
                total: "esto lo saco del context"
            })
            .then((result) => {setIdVenta(result.id)      })
            const updateCollection = doc(db, "productos", "aca iria el id");
            updateDoc(updateCollection, {stock:10})  */

            addProduct(contador, product);
            
           newStock = newStock - contador;
            const stockActual = newStock - contador;
            console.log("el stock era de " + newStock + ", ahora es de " + stockActual)
            setContador(0);
        
        
        
    } 

    

    return {
        agregar, quitar, agregarCarrito, contador, onAdd, newStock
    }
}