import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({titulo}) => {

    const[productDetail, setProductDetail] =useState([]) //-> Acá definimos dos cosas, la constante product detail, o sea, mi producto en cuestrion y, el set que nos va a ayudar a cambiar de estado, una actualización en la pagina digamos

    const productoDetallado = [{id:1, Nombre:"Pelotas de tenis Babolat Gold", Precio:1200, Imagen:"https://th.bing.com/th/id/R.d1d0272afdeaa61810213d2bf03abab3?rik=s8oaZmmoH49ltg&pid=ImgRaw&r=0", Descripcion: "Pelotas de tenis babolat gold x3 en tubo", "stock":6}]
        //console.log("Linea 11 ItemListContainer" + productoDetallado) esto ya existe, pero al actualizarse la pag tan rapido se loguea varias veces
    
    const getDetail = new Promise ((resolve, reject) =>{

        

        let condition = true
        // Esto es la promesa, la condicion es verdadero por lo que se resuelve en 2 seg 
        setTimeout(()=>{
            if (condition){
                resolve(productoDetallado)
                /* console.log("este seria el resolve " + resolve)
                console.log("esto sería el producto detallado: " + productoDetallado) */
            }else {
                reject("algo salio mal")
            }
        }, 2000)
    })


    useEffect(()=>{
        getDetail //esto es la promesa, la resuelve y la respuesta es que productDetail pasa a ser productoDetallado
        .then((res)=> setProductDetail(res))
        /* .then(console.log("Este es el nuevo product Detail" + productDetail)) */
    }, [])



return(
    <div className='Saludar'>
        <span>{titulo}</span>
        <ItemDetail itemDetallado={productDetail}/> {/* Finalmente acá llamo a la constante de arriba para que sea la prop de la funcion de ItemDetail*/} 
        {/* ¿No podría simplemente haber obviado todo esto y poner itemDetallado={productoDetallado}? */}
        {/* Efectivamente ante el frontEnd es lo mismo, en la prueba uno salio al instante, el otro asincrónico */}
    </div>
)

}

export default ItemDetailContainer