import React from 'react';
import ItemList from './ItemList';
import './ItemCard.css'

const ItemCard = ({ item }) => {

console.log(item);

    return (
        <div className="item-card">
            <p>{item.title}</p>
            <img src={item.url} alt={item.title} />
            <p>Brand:{item.brand}</p>
            <p>Price: {item.price}</p>
            <p>Rating: {item.rate}</p>
            
        </div>
    );
};

export default ItemCard;