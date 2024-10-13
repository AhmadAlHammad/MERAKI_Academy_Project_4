import React from 'react';
import ItemList from './ItemList';
const ItemCard = ({ item }) => {
    return (
        <div className="item-card">
            <h3>{item.title}</h3>
            <img src={item.url} alt={item.title} />
            <p>{item.brand}</p>
            <p>Price: ${item.price}</p>
            <p>Rating: {item.rate}</p>
            
        </div>
    );
};

export default ItemCard;