import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import ItemCard from './ItemCard'; 
const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/accessories/accessories');
                const data = response.data; 
                console.log("test");
                
                console.log(response);
                
                if (response.data) {
                    setItems(response.data.data); 

                } else {
                    console.error("Failed to fetch items:", data.message);
                    setError(response.data.message); 
                }
            } catch (error) {
                console.error("Error fetching items:", error);
                setError("Failed to fetch items."); 
            }
        };

        fetchItems(); 
        
    }, []);

   
   
    return (
        <div className="item-list">
         

            {items.map((item) => (
                
<ItemCard key={item._id} item = {item} />

            ))}


        </div>

     
    );
};

export default ItemList;