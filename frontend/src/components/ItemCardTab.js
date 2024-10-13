import React from 'react';
import ItemList from './ItemList';
import './ItemCardTab.css'

const ItemCardTab = ({ itemTap }) => {

console.log(itemTap);

    return (
        <div className="item-card">
            <p className='titleCard'>{itemTap.title}</p>
            <img src={itemTap.url} className='imgTap' />
            <p className='BrandTap'>Brand:{itemTap.brand}</p>
            <p className='PriceTap'>Price: {itemTap.price}</p>
            <p className='RateTap'>Rating: {itemTap.rate}</p>
            
        </div>
    );
};

export default ItemCardTab;