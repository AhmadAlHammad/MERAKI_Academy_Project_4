import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Cart.css'; 
import Navbar  from './shared components/Navbar';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [status, setStatus] = useState(false);

    const navigate = useNavigate();


    const fetchCartItems = async () => {
        try {
            const userId = localStorage.getItem('UID'); 
            console.log(userId);
            
            const response = await axios.get(`http://localhost:5000/cart/git/${userId}`);
            setCartItems(response.data.items);
            console.log(response.data.items);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
        setStatus(false);
        
    };


    useEffect(() => {
        fetchCartItems();
    }, [status]); 
    
    return (
        <div className='Cart'>
<Navbar/>
            <div className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <div className="cart-item" >
                           <p className="titleCart">{item.title}</p>
      <img src={item.Url} className="imgCart" alt={item.title} />
      <p className="BrandCart">Brand: {item.brand}</p>
      <p className="PriceCart">Price: {item.price}</p>
      <p className="RateCart">Rating: {item.rating}</p>
      <p className="typeCart">Type: {item.type}</p>
                        </div>
                    ))
                ) : (
                    <p>No items in the cart</p>
                )}
            </div>
        </div>
    );
};

export default Cart;