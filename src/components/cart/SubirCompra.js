import React, { useState } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { cartContext } from '../API/ListaDeProductos';
import { useContext } from 'react';

const SubirCompra = () => {

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
        addDoc(ventasCollection, { //este me sirve para subir datos en firebase
            datosComprador,
            items: obj,
            fecha: serverTimestamp(),
            total: "esto lo saco del context"
        })
        .then((result) => {setIdVenta(result.id)      }) //esta linea ya viene por defecto, no es necesaria
    
        /* const updateCollection = doc(db, "productos", "aca iria el id");
        updateDoc(updateCollection, {stock:10}) */ //en vez de 10 deberia ir algo como product.stock - compra
    
    }

return (
    <>
        <button onClick = {finalizarCompra} className='btnVolverTG'>Completar Compra</button>
    </>
    
)


}


export default SubirCompra