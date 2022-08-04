import { useState } from 'react'
import { cartContext } from '../API/ListaDeProductos';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';


export const UsarContador = ({stock, initial, onAdd, product}) => {
    
    
    const parametroId = useParams();
    const idDelProducto = parametroId.tiendaId
    
     const {addProduct, isInCart} = useContext(cartContext)
   

    let newStock = stock
    const [contador, setContador] = useState(initial)
    const [idVenta, setIdVenta] = useState()
    

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

     function agregarCarrito() {
        
        

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
           
            addProduct(contador, product, idDelProducto);
            
           newStock = newStock - contador;
            const stockActual = newStock - contador;
            console.log("el stock era de " + newStock + ", ahora es de " + stockActual)
            setContador(0);
        
        
        
    } 

    

    return {
        agregar, quitar, agregarCarrito, contador, onAdd, newStock
    }
}