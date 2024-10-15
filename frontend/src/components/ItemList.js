import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/product/p");
        const data = response.data;
        console.log("test");

        console.log(response);

        if (response.data) {
          console.log(response)
          setItems(response.data.data.response);
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
console.log("items",items);

  return (
    <div className="item-list">
      
      {items && items.map((item) => {
        console.log(item)
        
        return <ItemCard key={item._id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
