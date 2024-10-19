import React, { useState } from 'react';
import axios from 'axios';
import Cart from './Cart'
import './ItemCard.css';

const ItemCard = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async (id) => {
    const userId = localStorage.getItem('UID');
    const token = localStorage.getItem('Token');
  
    if (!userId) {
      alert('Please log in to add items to the cart!');
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await axios.put(
        'http://localhost:5000/cart/Add',
        { userId, items: id }, 
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
  
      console.log('Item added to cart:', response.data);
      alert('Item successfully added to cart!');
    } catch (error) {
      console.error('Error adding item to cart:', error);
      alert('Error adding item to cart. Please try again or log in.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="item-card">
  

      <p className="titleCard">{item.title}</p>
      <img src={item.Url} className="img" alt={item.title} />
      <p className="Brand">Brand: {item.brand}</p>
      <p className="Price">Price: {item.price}</p>
      <p className="Rate">Rating: {item.rating}</p>
      <p className="type">Type: {item.type}</p>

      <button
        className="addToCartBtn"
        type="button"
        id={item._id}
        onClick={(e) => {
          handleAddToCart(e.target.id);
        }}
        disabled={isLoading} 
      >
        {isLoading ? 'Adding...' : 'Add To Cart'}
      </button>
    </div>
  );
};

export default ItemCard;