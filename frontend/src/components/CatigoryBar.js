import React, { useState } from 'react';
import './ItemCard.css'

const CatigoryBar = ({ item }) => {
// const [dataCart,setdataCarts] = useState([])
console.log(item);

    return (
        <div className="catigoryBar">
            <p className='catigoryBarType'>{item.type}</p>
                </div>
    );
};

export default CatigoryBar;