import React from 'react';
import ItemD from './ItemD';


const ItemDetail = ({itemDetallado}) =>{

    console.log(JSON.stringify(itemDetallado))
    console.log("Del archivo ItemDetail.jsx esta es una prop: " + itemDetallado.id) //Esto me da undefined...¿Por qué si arriba me sale el array con objetos bien?
    /* console.log(itemDetallado.map(Variable)) */ //el map es para retornar un nuevo array....
    return(
        <>
            <div>
                <h4>Lista de productos: TENIS</h4>
                <main>
                {itemDetallado.map((VariableDelArray)=><ItemD key={VariableDelArray.id} product={VariableDelArray}/>)}
                </main>
            </div>
        </>
    )

}

export default ItemDetail