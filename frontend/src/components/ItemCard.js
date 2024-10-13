import React from 'react';
import ItemList from './ItemList';
import './ItemCard.css'

const ItemCard = ({ item }) => {

console.log(item);

    return (
        <div className="item-card">
            <p className='titleCard'>{item.title}</p>
            <img src={item.url} className='img' />
            <p className='Brand'>Brand:{item.brand}</p>
            <p className='Price'>Price: {item.price}</p>
            <p className='Rate'>Rating: {item.rate}</p>
            
        </div>
    );
};

export default ItemCard;