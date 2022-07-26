import React, {createContext, useContext, useState} from 'react'




    export const cartContext = createContext();
    const {Provider} = cartContext;

  const CustomProvider = ({children}) => {

    
    const [compras, setCompras]= useState([])
    const [totalPesos, setTotalPesos] = useState()



    /* const getQtyProducts = () =>{} */
        let qty = 0
        compras.forEach(compra => qty += 1)
        console.log("la getQtyProducts da : " + qty)
        
   

    const addProduct = (qty, product) => {
        
        
        setCompras([...compras, {Nombre: product.Nombre, cantidad: qty, precio: product.Precio}])
        console.log("esto es la compra " + JSON.stringify(compras))
        
       

    }

    const eliminarProducto = (id) => {

        setCompras(compras.filter(product => product.id !== id))
        console.log("el eliminado es " + compras)
    }

    const isInCart = (id) =>{
        /* const encontrado = productosDetallados.find(compra => compra.id == id);
        encontrado ? true : false;
        console.log("el isInCart es: "  + JSON.stringify(encontrado)) */

        return compras.some(compra => compra.id == id) //remplaza a lo de arriba
        
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