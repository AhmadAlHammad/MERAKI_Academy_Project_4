import Navbar from './components/shared components/Navbar';
import ItemList from './components/ItemList';
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [laptop, setLaptop] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorlaptop, setErrorLaptop] = useState(null);

  const fetchLaptopData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/laptop/laptops");
      if (response.data) {
        setLaptop(response.data.data.response);
      } else {
        console.error("Failed to fetch items:", response.data.message);
        setErrorLaptop(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
      setErrorLaptop("Failed to fetch items.");
    } 
  };



 

  return (
    <div>
      <Navbar />
      <div className='CatigoryBar'>
        <p className='Laptop' onClick={fetchLaptopData}>Laptop</p>
        <p className='Tvs'>Tvs</p>
        <p className='Tablets'>Tablets</p>
        <p className='Mobile'>Mobile</p>
        <p className='accessories'>accessories</p>
      </div>

      <div className="item-list">
       
        {laptop && laptop.map((item) => (
          <div >
           
            <p>{item.name}</p> 
          </div>
        ))}
      </div>
      <ItemList />
    </div>
  );
};

export default Home;