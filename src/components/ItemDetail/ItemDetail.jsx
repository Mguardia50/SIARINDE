import React from 'react';
import ItemD from './ItemD';


const ItemDetail = ({itemDetallado}) =>{
    
    /* const objetoDePrueba = {id:2, Nombre:"Rollo de cuerdas kirchbaum Max Power Rought",Precio:16000, Imagen:"https://th.bing.com/th/id/R.39ef950ee349dad1ad6563af33c401da?rik=h%2fCS7bIxbQTQNQ&pid=ImgRaw&r=0", Descripcion:"Rollo de cuerdas calibre 1.30mm kirchbaum", "stock":1} */
    /* console.log(JSON.stringify(itemDetallado))
    console.log("Del archivo ItemDetail.jsx esta es una prop: " + itemDetallado.id) */ //Esto me da undefined...¿Por qué si arriba me sale el array con objetos bien?
    /* console.log(itemDetallado.map(Variable)) */ //el map es para retornar un nuevo array....
    return(
        <>
            <div>
                
                <main>
                {/* <ItemD product={objetoDePrueba}></ItemD> -> ESTO FUNCIONA PERFECTO, LO QUE SIGNIFICA QUE MEDIANTE UN JSON Y UN FECTH PODRIA LLAMAR SOLO AL OBJETO DESEADO SIN TENER TODO EL CODIGO ENGORROSO DE CODER QUE NO OZ GUZTA, POR EL MOMENTO DEJAREMOS TODO TAL CUAL ESTÁ*/}
                {/* se llama VariableDelArray solo por fines didacticos asi entiendo el codigo; retorna un objeto dentro de un array */}
                {itemDetallado.map((VariableDelArray)=><ItemD key={VariableDelArray.id} product={VariableDelArray }/>)} 
                
                </main>
            </div>
        </>
    )

}

export default ItemDetail