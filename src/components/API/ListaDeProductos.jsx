import React, {createContext, useContext, useState} from 'react'



/*    export const contextProductos = createContext([{id:1, Nombre:"Pelotas de tenis Babolat Gold", Precio:1200, Imagen:"https://th.bing.com/th/id/R.d1d0272afdeaa61810213d2bf03abab3?rik=s8oaZmmoH49ltg&pid=ImgRaw&r=0", Descripcion: "Pelotas de tenis babolat gold x3 en tubo", stock:6},
  {id:2, Nombre:"Rollo de cuerdas kirchbaum Max Power Rought",Precio:16000, Imagen:"https://th.bing.com/th/id/R.39ef950ee349dad1ad6563af33c401da?rik=h%2fCS7bIxbQTQNQ&pid=ImgRaw&r=0", Descripcion:"Rollo de cuerdas calibre 1.30mm kirchbaum", stock:1}, 
  {id:3, Nombre:"Cubregrip generico",Precio: 300, Imagen:"https://th.bing.com/th/id/OIP.HlY-SH0EsbzXgQB4lMFtYwHaHa?pid=ImgDet&rs=1", Descripcion: "Cubregrip genérico varios colores", stock:15},
  {id:4, Nombre:"Muñequera toalson", Precio: 500, Imagen:"https://th.bing.com/th/id/R.b628006895090d9d94c4781b7bf31f6a?rik=te2weY5eo%2fw70A&pid=ImgRaw&r=0",Descripcion: "Muñequera de toalla toalson", stock:10}]
  )  */

    export const cartContext = createContext();
    const {Provider} = cartContext;

  const CustomProvider = ({children}) => {

    const [productosDetallados, setProductosDetallados] = useState([{id:1, Nombre:"Pelotas de tenis Babolat Gold", Precio:1200, Imagen:"https://th.bing.com/th/id/R.d1d0272afdeaa61810213d2bf03abab3?rik=s8oaZmmoH49ltg&pid=ImgRaw&r=0", Descripcion: "Pelotas de tenis babolat gold x3 en tubo", stock:6},
    {id:2, Nombre:"Rollo de cuerdas kirchbaum Max Power Rought",Precio:16000, Imagen:"https://th.bing.com/th/id/R.39ef950ee349dad1ad6563af33c401da?rik=h%2fCS7bIxbQTQNQ&pid=ImgRaw&r=0", Descripcion:"Rollo de cuerdas calibre 1.30mm kirchbaum", stock:1}, 
    {id:3, Nombre:"Cubregrip generico",Precio: 300, Imagen:"https://th.bing.com/th/id/OIP.HlY-SH0EsbzXgQB4lMFtYwHaHa?pid=ImgDet&rs=1", Descripcion: "Cubregrip genérico varios colores", stock:15},
    {id:4, Nombre:"Muñequera toalson", Precio: 500, Imagen:"https://th.bing.com/th/id/R.b628006895090d9d94c4781b7bf31f6a?rik=te2weY5eo%2fw70A&pid=ImgRaw&r=0",Descripcion: "Muñequera de toalla toalson", stock:10}]
    )
    
    const [compras, setCompras]= useState([])

    


    /* const getQtyProducts = () =>{} */
        let qty = 0
        compras.forEach(compra => qty += 1)
        console.log("la getQtyProducts da : " + qty)
        
   

    const addProduct = (qty, id) => {
        const producto = productosDetallados.find(compra => compra.id == id);
        /* console.log("esto es el producto " + qty + producto ) */
        
        setCompras([...compras, {id: producto.id, Nombre: producto.Nombre, cantidad: qty}])
        console.log("esto es la compra " + JSON.stringify(compras))
        
       

    }

    const eliminarProducto = (id) => {

    }

    const isInCart = (id) =>{
        /* const encontrado = productosDetallados.find(compra => compra.id == id);
        encontrado ? true : false;
        console.log("el isInCart es: "  + JSON.stringify(encontrado)) */

        return compras.some(compra => compra.id == id) //remplaza a lo de arriba
        
    }

    const obtenerCantidad = () =>{

    }



    return (
       <Provider value={{productosDetallados, addProduct, obtenerCantidad, isInCart, qty, compras}}>
            {children}
        </Provider>
    )
}

export default CustomProvider