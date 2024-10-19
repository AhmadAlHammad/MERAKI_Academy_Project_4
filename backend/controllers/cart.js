const express = require("express");

const cartModel = require("../models/cartSchema");
const mongoose = require('mongoose');


const addToCart = async (req, res) => {
    try {
        const userId = req.body.userId;
        const items = req.body.items; 

        console.log("User ID:", userId);
        console.log("Items:", items);

        const updatedCart = await cartModel.findOneAndUpdate(
            { userId: userId },
            { $push: { items: items } },
            { new: true, upsert: true } 
        );

        res.status(200).json(updatedCart);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding to cart" });
    }
};


const deleteItemFromCart = async (req, res) => {
    try {
      const itemId = req.params.id; 
  
      if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(400).json({ error: 'Invalid item ID format' });
      }
  
      console.log('Attempting to delete item with ID:', itemId);
  
      
      const cart = await cartModel.findOneAndDelete({
        items: itemId 
      });
  
      
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found or item not in cart' });
      }
  
      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
      console.log('Error during deletion:', error);
      res.status(500).json({ error: 'Failed to delete item' });
    }
  };
const gitAllItem = async (req, res) => {
    try {
        const userId = req.params.userId;
        
        console.log("User ID fixed:", userId);

        const result = await cartModel.findOne({ userId }).populate('items').exec();

        if (!result) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json(result);
        
    } catch (err) {

        console.error(err);
        res.status(500).json({ message: "Error retrieving cart items" });
    }
};
module.exports = { addToCart ,gitAllItem,deleteItemFromCart};
