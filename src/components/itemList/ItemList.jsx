
import React from 'react';
import Item from './items';


const ItemList = ({productList}) =>{

    

    return(
        <>
            <div>
                
            
                <main className='itemBoxContainer'>
                    {productList.map((product)=><Item key={product.id} product={product}/>)}
                </main>
            </div>
        </>
    )

}

export default ItemList