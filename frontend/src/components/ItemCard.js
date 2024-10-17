import React from 'react';
import axios from 'axios';
import './ItemCard.css'
const ItemCard = ({ item }) => {
  const handleAddToCart = async () => {
    const userId = localStorage.getItem("UID"); 
   const token =  localStorage.getItem("token");


    if (!userId) {
      alert('Please log in to add items to the cart!'); 
      return;
    }

    try {
     
      const response = await axios.post(`http://localhost:5000/cart/Add`, { items: item._id, userId: userId },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      )
      console.log('Item added to cart:', response.data);
      alert('Item successfully added to cart!'); 
    } catch (error) {
      console.error('Error adding item to cart:', error);
      alert('Cant add item to Cart Please Login .'); 
    }
  };

  return (
    <div className="item-card">
      <p className='titleCard'>{item.title}</p>
      <img src={item.Url} className='img' alt={item.title} />
      <p className='Brand'>Brand: {item.brand}</p>
      <p className='Price'>Price: {item.price}</p>
      <p className='Rate'>Rating: {item.rating}</p>
      <p className='type'>Type: {item.type}</p>

      <button className="addToCartBtn" type="button" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
 
  );
 
};

export default ItemCard;