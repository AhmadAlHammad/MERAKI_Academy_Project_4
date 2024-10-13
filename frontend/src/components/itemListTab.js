import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import ItemCardTab from './ItemCardTab'; 
const itemListTab = () => {
    const [itemsTap, setItemsTap] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setErrorTap] = useState(null);

    useEffect(() => {
        const fetchItemsTab = async () => {
            try {
                const response = await axios.get('http://localhost:5000/tablet/tabltes');
                const data = response.data; 
                console.log("test");
                
                console.log(response);
                
                if (response.data) {
                    setItemsTap(response.data.data); 

                } else {
                    console.error("Failed to fetch items:", data.message);
                    setErrorTap(response.data.message); 
                }
            } catch (error) {
                console.error("Error fetching items:", error);
                setErrorTap("Failed to fetch items."); 
            }
        };

        fetchItemsTab(); 
        
    }, []);
    
    

   return (
    <div className="item-list">
     

        {itemsTap.map((itemTap) => (
            
<ItemCardTab key={itemTap._id} itemTap = {itemTap} />

        ))}


    </div>

 
);
};
export default itemListTab;