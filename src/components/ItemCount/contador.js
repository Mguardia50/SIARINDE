import { useState } from 'react'

export const UsarContador = ({stock, initial, final}) => {
    initial = 0;
    stock = 6;

    

    const [newStock, setStock] = useState(stock)
    const [contador, setContador] = useState(initial)

    const agregar = () => {
        /* console.log(contador)
        console.log(stock) */
        if (contador < newStock) {
            setContador(contador + 1); 
        }
        else{
            console.log("No hay más stock");
        }

    }

    const quitar = () => {

        if (contador >0){
            setContador(contador - 1); 
        }
        else{
            console.log("no puede ser negativo");
        }
        

    }

    const agregarCarrito = () => {

        final = contador;
        setStock(newStock - contador);
        const stockActual = newStock - contador;
        console.log("el stock era de " + newStock + ", ahora es de " + stockActual)
       
        setContador(0);
        
    }

    /* const cuentaFinal = document.getElementById("inputCantidad");
    final = cuentaFinal.value  */

    return {
        agregar, quitar, agregarCarrito, contador, final, newStock
    }
}