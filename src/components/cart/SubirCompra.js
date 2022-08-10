import React, { useState } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { cartContext } from '../API/ListaDeProductos';
import { useContext } from 'react';
import {LoginCuenta} from '../Login/login';
import { Link} from "react-router-dom";
import { doc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'


const SubirCompra = (montoFinal) => {

    const {compras} = useContext(cartContext)
    const [idVenta, setIdVenta] = useState()
    const [aceptado, setAceptado]= useState(false);

    const nombre = (sessionStorage.getItem("usuarioSiarinde"));
    const mail = (sessionStorage.getItem("mailUsuarioSiarinde"));

    function Aceptar (){

        let timerInterval
      
                Swal.fire({
                title: 'LOGIN IN...',
                timer: 8000,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                },
                })
           setTimeout(()=>{
            const nombreTO = (sessionStorage.getItem("usuarioSiarinde"));
            const mailTO = (sessionStorage.getItem("mailUsuarioSiarinde"));
            setAceptado(true);
            if(nombreTO == null && mailTO == null){
                Swal.fire({
                    icon: 'error',
                    title: 'Ups...',
                    text: 'Algo malio sal, cierre y vuelva a intentarlo',
                  })
            }
        }, 8000)

        
            
    }
    

    const datosComprador = {
        nombre: nombre,
        email: mail
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
        .finally(()=>{

            

            compras.forEach(element => {
                const updateCollection = doc(db, "productos", element.id);
                const stockActual = (element.stock - element.cantidad);
                updateDoc(updateCollection, {Stock: stockActual})});
                
        })
        
    }

   


return (
    <>

        {(nombre == null && mail == null) ? <Link to="/tienda/cart"><button onClick = {() =>{LoginCuenta(); Aceptar()}} className='btnVolverTG'>Log In</button></Link> : <Link to="/finalizarPedido"><button onClick = {finalizarCompra} className='btnVolverTG'>Completar Compra</button></Link>}
        
    </>
    
)


}


export default SubirCompra