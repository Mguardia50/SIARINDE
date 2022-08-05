import React, { useState } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { cartContext } from '../API/ListaDeProductos';
import { useContext } from 'react';

const SubirCompra = (montoFinal) => {

    const {compras} = useContext(cartContext)
    const [idVenta, setIdVenta] = useState()

    const datosComprador = {
        nombre: 'Juan',
        apellido: 'cataplasma',
        email: 'unemail@quiriconstias.com'
    }


        const obj = Object.assign({}, compras);

  

    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, { 
            datosComprador,
            items: obj,
            fecha: serverTimestamp(),
            total: montoFinal
        })
        .then((result) => {setIdVenta(result.id)      }) 
    
       
    }

   


return (
    <>
        <button onClick = {finalizarCompra} className='btnVolverTG'>Completar Compra</button>
        
    </>
    
)


}


export default SubirCompra