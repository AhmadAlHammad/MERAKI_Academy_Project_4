import React from 'react';
import axios from 'axios';
import './ItemCard.css'
const ItemCard = ({ item }) => {
  const handleAddToCart = async (id) => {
    const userId = localStorage.getItem("UID"); 
   const token =  localStorage.getItem("Token");
console.log(userId);


    if (!userId) {
      alert('Please log in to add items to the cart!'); 
      return;
    }

    try {
     
      const response = await axios.put(`http://localhost:5000/cart/Add/${id}`,{userId}
      
      )
      console.log('Item added to cart:', response);
      // alert('Item successfully added to cart!'); 
    } catch (error) {
      console.error('Error adding item to cart:', error);
      console.log(error);
      
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

      <button className="addToCartBtn" type="button" id={item._id} onClick={(e)=>{
        console.log(e.target.id);
        
        handleAddToCart(e.target.id)
      }}>
        Add To Cart
      </button>
    </div>
 
  );
 
};

export default ItemCard;