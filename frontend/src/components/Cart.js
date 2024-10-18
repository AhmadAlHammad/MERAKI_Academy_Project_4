import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const fetchCartItems = async () => {
    try {
      const userId = localStorage.getItem("UID"); 
      const response = await fetch(`http://localhost:5000/cart/git/ `, { userId });

     

      const data = await response.json(); 
      console.log("Fetched data:", data); 

      
      setCartItems(data.items || []); 

    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleClick = () => {
    fetchCartItems(); 
    navigate('/Cart'); 
  };

  return (
    <div className='Cart'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-cart"
        viewBox="0 0 16 16"
        onClick={handleClick}
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
      </svg>

      <div>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item._id}>{item.name} - ${item.price}</div> 
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;