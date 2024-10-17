const express = require("express");

const cartModel = require("../models/cartSchema");

const addToCart = async (req, res) => {
    try {
        const userId = req.body.userId;
        console.log(req.token);

        const { items } = req.params;
console.log(userId);

        const updatedCart = await cartModel.findOneAndUpdate(

            { userId : userId},
            { $push: { items: items } },
            { new: true }
        );

        res.status(200).json(updatedCart);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding to cart" });
    }
};

const gitAllItem = async (req, res) => {
    try {
        const userId = req.params.userId; 
        console.log("User ID:", userId);

        const result = await cartModel.findOne({ userId: userId }).populate('items').exec(); 

        if (!result) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error retrieving cart items" });
    }
};

module.exports = { addToCart, gitAllItem };