import React, { useEffect, useState } from 'react';
import "./style.css";
import ItemList from '../itemList/ItemList';
import BasicMenu from './MenuDesplegable';
import { useParams } from 'react-router-dom';
import {db} from '../../firebase/firebase';
import {getDocs, collection, query, where} from 'firebase/firestore';



const ItemListContainer = () => {

    const[productList, setProductList] =useState([])
   const[loaded, setLoaded] = useState(true)

    
    const parametroCategoria = useParams();
    let tiendaGeneral = parametroCategoria.categoria

    useEffect(() =>{
        
       
        const productsCollection = collection(db, 'productos')

        let q = query(productsCollection, where('Categoria', '==', parametroCategoria.categoria))

        if (tiendaGeneral === "general"){ q = collection(db, 'productos')}
           
        getDocs(q)
        .then(result =>{ 
             const lista = result.docs.map(product =>{
                return {
                    id: product.id,
                    ...product.data(),
                }
            })
            setProductList(lista);
            
        
        })
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    }, [parametroCategoria]);
    
    


return(
    <div className='Saludar'>
        
        <div className='pagTienda'>
            <div className='ContenedorFiltro'>
                <BasicMenu></BasicMenu>
            </div>

            <ItemList productList={productList}/>
        </div>
    </div>
)

}

export default ItemListContainer