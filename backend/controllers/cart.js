const express = require("express");

const cartModel = require("../models/cartSchema");

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

// const addToCart = (req, res) => {
//   const { user_Id } = req.token;
//   const { items } = req.params;
//   const { cart_Id } = req.body;

//   cartModel
//     .findOne({ userId: user_Id })
//     .then((result) => {
//       cartModel
//         .findByIdAndUpdate(cart_Id, { $push: { items } }, { new: true })
//         .then((resp) => {
//           console.log(resp);
//           res.status(200).json(resp);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

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
module.exports = { addToCart ,gitAllItem};
