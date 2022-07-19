import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {SIARINDE} from '../../firebase/firebase';
import {doc, getDoc, collection, query, where} from 'firebase/firestore';

const ItemDetailContainer = ({titulo}) => {


    const parametroId = useParams();
//con esto busco los datos de firebase
  /*   useEffect(() => {
        const productCollection = collection(db, 'productos');
        const refDoc = doc(productCollection, productId)
        getDoc(refDoc).then(result =>{
            setProduct(result.data())
        })
    }) */

    
    /* console.log("el parametro es " + parametroId.tiendaId); */

    const[productDetail, setProductDetail] =useState([]) //-> Acá definimos dos cosas, la constante product detail, o sea, mi producto en cuestrion y, el set que nos va a ayudar a cambiar de estado, una actualización en la pagina digamos
   

    const productoDetallado = [{id:1, Nombre:"Pelotas de tenis Babolat Gold", Precio:1200, Imagen:"https://th.bing.com/th/id/R.d1d0272afdeaa61810213d2bf03abab3?rik=s8oaZmmoH49ltg&pid=ImgRaw&r=0", Descripcion: "Pelotas de tenis babolat gold x3 en tubo", stock:6},
    {id:2, Nombre:"Rollo de cuerdas kirchbaum Max Power Rought",Precio:16000, Imagen:"https://th.bing.com/th/id/R.39ef950ee349dad1ad6563af33c401da?rik=h%2fCS7bIxbQTQNQ&pid=ImgRaw&r=0", Descripcion:"Rollo de cuerdas calibre 1.30mm kirchbaum", stock:1}, 
    {id:3, Nombre:"Cubregrip generico",Precio: 300, Imagen:"https://th.bing.com/th/id/OIP.HlY-SH0EsbzXgQB4lMFtYwHaHa?pid=ImgDet&rs=1", Descripcion: "Cubregrip genérico varios colores", stock:15},
    {id:4, Nombre:"Muñequera toalson", Precio: 500, Imagen:"https://th.bing.com/th/id/R.b628006895090d9d94c4781b7bf31f6a?rik=te2weY5eo%2fw70A&pid=ImgRaw&r=0",Descripcion: "Muñequera de toalla toalson", stock:10}]

    //console.log("Linea 11 ItemListContainer" + productoDetallado) esto ya existe, pero al actualizarse la pag tan rapido se loguea varias veces
    const productoEncontrado = []
    var busqueda = productoDetallado.find((elemento) => elemento.id == parametroId.tiendaId) //del params busca el producto, lo pushea en el array y eso es lo que muestra
    productoEncontrado.push(busqueda)


    const getDetail = new Promise ((resolve, reject) =>{

        
        let condition = true
        
        // Esto es la promesa, la condicion es verdadero por lo que se resuelve en 2 seg 
        setTimeout(()=>{
            if (condition){
                /* resolve(productoDetallado) */
                resolve(productoEncontrado)
                /* console.log("la busqueda es : " + JSON.stringify(busqueda)) */
                /* console.log("este seria el resolve " + resolve)
                console.log("esto sería el producto detallado: " + productoDetallado) */
            }else {
                reject("algo malio sal")
            }
        }, 2000)
    })


    useEffect(()=>{
        getDetail //esto es la promesa, la resuelve y la respuesta es que productDetail pasa a ser productoDetallado
        .then((res)=> setProductDetail(res))
        .then(console.log("Este es el nuevo product Detail" + productDetail))
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