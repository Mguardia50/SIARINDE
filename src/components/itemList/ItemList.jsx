import React from 'react';
import Item from '../Items/items';


const ItemList = ({productList}) =>{

    return(
        <>
            <div>
                <h4>Lista de productos: TENIS</h4>
                <main className='itemBoxContainer'>
                    {productList.map((product)=><Item key={product.id} product={product}/>)}
                </main>
            </div>
        </>
    )

}

export default ItemList