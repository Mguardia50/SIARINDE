import React, {createContext, useState} from 'react'
import { db } from '../../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';



    export const cartContext = createContext();
    const {Provider} = cartContext;

  const CustomProvider = ({children}) => {

    
    const [compras, setCompras]= useState([])
    const [totalPesos, setTotalPesos] = useState()
    

   
        let qty = 0
        compras.forEach(compra => qty += 1)
        
   

    const addProduct = (qty, product, idDelProducto) => {
         
        setCompras([...compras, {id: idDelProducto, Nombre: product.Nombre, cantidad: qty, precio: product.Precio, stock: product.Stock}])
    }

    const eliminarProducto = (id, stock) => {

        
        const updateCollection = doc(db, "productos", id);

        updateDoc(updateCollection, {Stock: stock});

        setCompras(compras.filter(product => product.id !== id))

        
    }

    const isInCart = (id) =>{
   
        return compras.some(compra => compra.id === id) 
        
    }

    const totalPrecio = () =>{
        
        compras.forEach(element => setTotalPesos(totalPesos += compras.precio * compras.cantidad));

    }



    return (
       <Provider value={{ addProduct, totalPrecio, isInCart, eliminarProducto, qty, compras, totalPesos}}>
            {children}
        </Provider>
    )
}

export default CustomProvider