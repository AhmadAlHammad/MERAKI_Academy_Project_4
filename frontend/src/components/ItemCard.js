import React, { useState } from 'react';
import ItemList from './ItemList';
import './ItemCard.css'

const ItemCard = ({ item }) => {
const [dataCart,setdataCarts] = useState([])

    return (
        <div className="item-card">
            <p className='titleCard'>{item.title}</p>
            <img src={item.Url} className='img' />
            <p className='Brand'>Brand:{item.brand}</p>
            <p className='Price'>Price: {item.price}</p>
            <p className='Rate'>Rating: {item.rating}</p>
            <p className='type'>Type: {item.type} </p>

            <button class="addToCartBtn" type="button" onClick={(

            )=>{
         
            }}>Add To Cart</button>    
                </div>
    );
    
};

export default ItemCard;