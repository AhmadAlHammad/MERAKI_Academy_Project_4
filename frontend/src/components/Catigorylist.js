import React, { useEffect, useState } from "react";
import axios from "axios";
import CatigoryBar from "./CatigoryBar";
import './ItemCard.css'
const Catigorylist = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/product/p");
        const data = response.data;
        console.log("test");

        console.log(response.type);

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

  return (
    <div className="item-list">
      
      {items && items.map((item) => {
        console.log(item)
        
        return <CatigoryBar key={item._id} item={item} />;
      })}
    </div>
  );
};

export default Catigorylist;

