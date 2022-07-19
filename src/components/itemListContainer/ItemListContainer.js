import React, { useEffect, useState } from 'react';
import "./style.css";
import ItemList from '../itemList/ItemList';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BasicMenu from './MenuDesplegable';
import { useParams } from 'react-router-dom';
import {db} from '../../firebase/firebase';
import {getDocs, collection, query, where} from 'firebase/firestore'; //como no tiene nada lo trae de node modules



const ItemListContainer = ({greetings}) => {

    useEffect(() =>{
        const productsCollection = collection(db, 'productos')
        const q = query(productsCollection, where('categoria', '==', 'tenis')); //con equery creamos filtros
        getDocs(productsCollection)
        .then(result =>{
            result.map(product => {
                return {
                    id: product.id, 
                    ...product.data(),
                }
            })
            //aca va un setProducts
        })
    })
    
    const[productList, setProductList] =useState([])
    
/*    

async function getProducts(){
        const respuestaProductos = await fetch('../JSON/productos.json');
        console.log(respuestaProductos.json());
    }

    getProducts();

    const getData=()=>{
        fetch('../JSON/productos.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
          });}

          useEffect(()=>{
            getData()
          },[]) 
     */
    
        const parametroCategoria = useParams();
        console.log(parametroCategoria.categoria)

        const productos = [{id:1, Nombre:"Pelotas de tenis Babolat Gold", Precio:1200, Imagen:"https://th.bing.com/th/id/R.d1d0272afdeaa61810213d2bf03abab3?rik=s8oaZmmoH49ltg&pid=ImgRaw&r=0", Descripcion: "Pelotas de tenis babolat gold x3 en tubo", stock:6, Categoria:"Tenis", SubCategoria:"Pelotas"},
        {id:2, Nombre:"Rollo de cuerdas kirchbaum Max Power Rought",Precio:16000, Imagen:"https://th.bing.com/th/id/R.39ef950ee349dad1ad6563af33c401da?rik=h%2fCS7bIxbQTQNQ&pid=ImgRaw&r=0", Descripcion:"Rollo de cuerdas calibre 1.30mm kirchbaum", stock:1, Categoria:"Tenis", SubCategoria:"Cuerdas"}, 
        {id:3, Nombre:"Cubregrip generico",Precio: 300, Imagen:"https://th.bing.com/th/id/OIP.HlY-SH0EsbzXgQB4lMFtYwHaHa?pid=ImgDet&rs=1", Descripcion: "Cubregrip genérico varios colores", stock:15, Categoria:"Tenis", SubCategoria:"Accesorios"},
        {id:4, Nombre:"Muñequera toalson", Precio: 500, Imagen:"https://th.bing.com/th/id/R.b628006895090d9d94c4781b7bf31f6a?rik=te2weY5eo%2fw70A&pid=ImgRaw&r=0",Descripcion: "Muñequera de toalla toalson", stock:10, Categoria:"Futbol", SubCategoria:"Accesorios"}]
        
        
        
        const productosFiltrados = productos.filter(
           productofiltrado => productofiltrado.Categoria === parametroCategoria.categoria);

        /* console.log(JSON.stringify(productosFiltrados)) */
        
        
        const getProductos = new Promise ((resolve, reject) =>{

    

        setTimeout(()=>{
            if (parametroCategoria.categoria==="general"){
                resolve(productos)
                /* resolve(getProducts()) */
            }else {
                resolve(productosFiltrados)
            }
        }, 2000)
    })


    useEffect(()=>{
        getProductos
        .then((res)=> setProductList(res))

    }, [])



return(
    <div className='Saludar'>
        <span>{greetings}</span>
        <div className='ContenedorFiltro'>
            <h4>Lista de productos: </h4>
            <BasicMenu></BasicMenu>
        </div>
        
                <FormControlLabel control={<Checkbox defaultChecked />} label="PELOTAS" id='CBPelotas' />
                <FormControlLabel control={<Checkbox defaultChecked />} label="CUERDAS" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="ACCESORIOS" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="ROPA" />
                <p>Los checkbox van a ir más adelante; idem que cambie el stock cuando esté en el carrito; no que desaparezca por si quiero agregar más</p>
        <ItemList productList={productList}/>
    </div>
)

}

export default ItemListContainer