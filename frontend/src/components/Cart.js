import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Cart.css'; 
import Navbar from './shared components/Navbar';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    const fetchCartItems = async () => {
        try {
            const userId = localStorage.getItem('UID'); 
            const response = await axios.get(`http://localhost:5000/cart/git/${userId}`);
            setCartItems(response.data.items);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, [status]);

    const handleDelete = async (itemId) => {
        try {
            await axios.delete(`http://localhost:5000/cart/${itemId}`); 
            setCartItems(cartItems => cartItems.filter(item => item._id !== itemId));
            setStatus(true); 
        } catch (error) {
            console.log("Error deleting item:", error);
        }
    };

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => {
            const price = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
    
            return total + (isNaN(price) ? 0 : price);
        }, 0);
    };

    const totalPrice = calculateTotalPrice(cartItems); 

    return (
        <div className='Cart'>
            <Navbar />
            <div className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <div className="cart-item" key={item._id}>
                            <p className="titleCart">{item.title}</p>
                            <img src={item.Url} className="imgCart" alt={item.title} />
                            <p className="BrandCart">Brand: {item.brand}</p>
                            <p className="PriceCart">Price: ${item.price}</p>
                            <p className="RateCart">Rating: {item.rating}</p>
                            <p className="typeCart">Type: {item.type}</p>
                     <button onClick={() => handleDelete(item._id)} className="deletebutton">Delete</button>
                    
                        </div>
                    ))
                    
                ) : (
                    <p>No items in the cart</p>
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="total-price">
                    <h2>Total Price: ${totalPrice}</h2>   
                  
                      </div>
            )}

            <div>
           
            </div>

            <div>
                    <button onClick={() =>   navigate(-1)} className="backBtn">Back</button>
                    </div>  
        </div>
    );
};

export default Cart;
