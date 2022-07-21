import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {doc, getDoc, collection, query, where} from 'firebase/firestore';
import {db} from '../../firebase/firebase';
import ItemD from './ItemD';

const ItemDetailContainer = ({titulo}) => {

    const[productDetail, setProductDetail] =useState([]) //-> Acá definimos dos cosas, la constante product detail, o sea, mi producto en cuestrion y, el set que nos va a ayudar a cambiar de estado, una actualización en la pagina digamos
    const[loaded, setLoaded] = useState(true)

    const  parametroId = useParams();

   
     useEffect(() => {
        const productCollection = collection(db, 'productos');
        
        const refDoc = doc(productCollection, parametroId.tiendaId);

        getDoc(refDoc)
        .then(result =>{
            setProductDetail(result.data())
        })
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    }, [parametroId]);


/*     console.log("los product detail son: " + JSON.stringify(productDetail) ) */


return(
    <div className='Saludar'>
        <span>{titulo}</span>

        <ItemD product={productDetail}></ItemD>
    </div>
)

}

export default ItemDetailContainer