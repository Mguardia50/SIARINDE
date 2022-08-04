import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {doc, getDoc, collection} from 'firebase/firestore';
import {db} from '../../firebase/firebase';
import ItemD from './ItemD';

const ItemDetailContainer = () => {

    const[productDetail, setProductDetail] =useState([]) 
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




return(
    <div className='Saludar'>

        <ItemD product={productDetail}></ItemD>
    </div>
)

}

export default ItemDetailContainer

