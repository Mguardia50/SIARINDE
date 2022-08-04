import React, {createContext, useState} from 'react'




    export const cartContext = createContext();
    const {Provider} = cartContext;

  const CustomProvider = ({children}) => {

    
    const [compras, setCompras]= useState([])
    const [totalPesos, setTotalPesos] = useState()



   
        let qty = 0
        compras.forEach(compra => qty += 1)
        
   

    const addProduct = (qty, product, idDelProducto) => {
        
        
        setCompras([...compras, {id: idDelProducto, Nombre: product.Nombre, cantidad: qty, precio: product.Precio}])
        console.log("esto es la compra " + JSON.stringify(compras))
        
       

    }

    const eliminarProducto = (id) => {

        
        setCompras(compras.filter(product => product.id !== id))
        console.log("el eliminado es " + compras)
    }

    const isInCart = (id) =>{
   
        return compras.some(compra => compra.id === id) 
        
    }

    const totalPrecio = () =>{
        
        compras.forEach(element => setTotalPesos(totalPesos += compras.precio * compras.cantidad));

        console.log("el total es: $" + totalPesos);
    }



    return (
       <Provider value={{ addProduct, totalPrecio, isInCart, eliminarProducto, qty, compras, totalPesos}}>
            {children}
        </Provider>
    )
}

export default CustomProvider