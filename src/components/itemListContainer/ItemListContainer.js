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

    const[productList, setProductList] =useState([])
    const[loaded, setLoaded] = useState(true)

    
    const parametroCategoria = useParams();
    let tiendaGeneral = parametroCategoria.categoria

    useEffect(() =>{
        
       
        const productsCollection = collection(db, 'productos')

        let q = query(productsCollection, where('Categoria', '==', parametroCategoria.categoria))

        console.log(tiendaGeneral)

        if (tiendaGeneral == "general"){ q = collection(db, 'productos')}
           
        getDocs(q)
        .then(result =>{ 
             const lista = result.docs.map(product =>{
                return {
                    id: product.id,
                    ...product.data(),
                }
            })
            setProductList(lista);
             console.log(lista);
        
        })
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    }, [parametroCategoria]);
    
    


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