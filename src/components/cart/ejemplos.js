import React, { useState } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';

const Esto = () => {


    const [idVenta, setIdVenta] = useState()
    const datosComprador = {
        nombre: 'Juan',
        apellido: 'cataplasma',
        email: 'unemail@quiriconstias.com'
    }

    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, { //este me sirve para subir datos en firebase
            datosComprador,
            items: [{nombre: "cataplasma"}, {nombre: "quiriconstias"}],
            fecha: serverTimestamp(),
            total: "esto lo saco del context"
        })
        .then((result) => {setIdVenta(result.id)      }) //esta linea ya viene por defecto, no es necesaria
    
        const updateCollection = doc(db, "productos", "aca iria el id");
        updateDoc(updateCollection, {stock:10}) //en vez de 10 deberia ir algo como product.stock - compra
    
    }

return (
    <>
        <div>Cualca</div>
        <button onClick = {finalizarCompra}>Completar Compra</button>
    </>
    
)


}


export default Esto