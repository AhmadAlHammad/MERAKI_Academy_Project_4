const express = require("express");

const cartModel = require('../models/cartSchema');
// const useId = response._id ;


const addToCart = async (req, res) => {
    try {
        const userId = req.body.userId; 
        const item = req.body.item; 
console.log();

        const updatedCart = await cartModel.findOneAndUpdate(

            { userId: userId },
            { addToCart: { items: item } },  
            { new: true, upsert: true } 
        );

        res.status(200).json(updatedCart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding to cart" });
    }
};

module.exports = {addToCart};