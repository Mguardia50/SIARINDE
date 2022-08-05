import { useState } from 'react'
import { cartContext } from '../API/ListaDeProductos';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';


export const UsarContador = ({stock, initial, onAdd, product}) => {
    
    
    const parametroId = useParams();
    const idDelProducto = parametroId.tiendaId
    
     const {addProduct, isInCart} = useContext(cartContext)
   

    let newStock = stock
    const [contador, setContador] = useState(initial)
    
    

    const agregar = () => {
   
        
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

     function AgregarCarrito() {
        
        if (isInCart(idDelProducto)){
            
            console.log("ya esta en el carrito")
            return

        }
      
            addProduct(contador, product, idDelProducto);
            
            const stockActual = newStock - contador;

            setContador(0);
            
            if (stockActual > 0) {

            
                const updateCollection = doc(db, "productos", idDelProducto);

                updateDoc(updateCollection, {Stock: stockActual})
                    
           
            }
        
    } 

    

    return {
        agregar, quitar, AgregarCarrito, contador, onAdd, newStock
    }
}