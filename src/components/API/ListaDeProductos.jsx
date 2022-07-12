import React, {createContext, useState} from 'react'



  export const contextProductos = createContext([{id:1, Nombre:"Pelotas de tenis Babolat Gold", Precio:1200, Imagen:"https://th.bing.com/th/id/R.d1d0272afdeaa61810213d2bf03abab3?rik=s8oaZmmoH49ltg&pid=ImgRaw&r=0", Descripcion: "Pelotas de tenis babolat gold x3 en tubo", stock:6},
  {id:2, Nombre:"Rollo de cuerdas kirchbaum Max Power Rought",Precio:16000, Imagen:"https://th.bing.com/th/id/R.39ef950ee349dad1ad6563af33c401da?rik=h%2fCS7bIxbQTQNQ&pid=ImgRaw&r=0", Descripcion:"Rollo de cuerdas calibre 1.30mm kirchbaum", "stock":1}, 
  {id:3, Nombre:"Cubregrip generico",Precio: 300, Imagen:"https://th.bing.com/th/id/OIP.HlY-SH0EsbzXgQB4lMFtYwHaHa?pid=ImgDet&rs=1", Descripcion: "Cubregrip genérico varios colores", stock:15},
  {id:4, Nombre:"Muñequera toalson", Precio: 500, Imagen:"https://th.bing.com/th/id/R.b628006895090d9d94c4781b7bf31f6a?rik=te2weY5eo%2fw70A&pid=ImgRaw&r=0",Descripcion: "Muñequera de toalla toalson", stock:10}]
  )

  const {Provider} = contextProductos

  const CustomProvider = ({children}) => {

    const [productosDetallados, setProductosDetallados] = useState([{id:1, Nombre:"Pelotas de tenis Babolat Gold", Precio:1200, Imagen:"https://th.bing.com/th/id/R.d1d0272afdeaa61810213d2bf03abab3?rik=s8oaZmmoH49ltg&pid=ImgRaw&r=0", Descripcion: "Pelotas de tenis babolat gold x3 en tubo", stock:6},
    {id:2, Nombre:"Rollo de cuerdas kirchbaum Max Power Rought",Precio:16000, Imagen:"https://th.bing.com/th/id/R.39ef950ee349dad1ad6563af33c401da?rik=h%2fCS7bIxbQTQNQ&pid=ImgRaw&r=0", Descripcion:"Rollo de cuerdas calibre 1.30mm kirchbaum", stock:1}, 
    {id:3, Nombre:"Cubregrip generico",Precio: 300, Imagen:"https://th.bing.com/th/id/OIP.HlY-SH0EsbzXgQB4lMFtYwHaHa?pid=ImgDet&rs=1", Descripcion: "Cubregrip genérico varios colores", stock:15},
    {id:4, Nombre:"Muñequera toalson", Precio: 500, Imagen:"https://th.bing.com/th/id/R.b628006895090d9d94c4781b7bf31f6a?rik=te2weY5eo%2fw70A&pid=ImgRaw&r=0",Descripcion: "Muñequera de toalla toalson", stock:10}]
    )
    
    const agregarProducto = (productosDetallados) => {
        console.log(productosDetallados)
    }

    const eliminarProducto = (id) => {

    }

    const isInList = (id) =>{

    }

    const obtenerCantidad = () =>{

    }



    return (
       <Provider value={{productosDetallados, agregarProducto, obtenerCantidad}}>
            {children}
        </Provider>
    )
}

export default CustomProvider