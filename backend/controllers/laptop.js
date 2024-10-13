const express = require('express')
const laptopModel = require('../models/laptopSchema');

const addlaptop  = (req,res)=>{
const {title,url,capacity,brand,ram,screenSize, rate,price }= req.body;

const addLab = new laptopModel({title,url,capacity,brand,ram,screenSize, rate,price});


addLab.save().then((response)=>{
    res.status(200).json({sucsess: true, message: "Add laptop", auther: response })
}).catch((err)=>{
    console.log(err);
    
    res.status(500).json({sucsess: false, message: "Cant Add "})
})

}

const getAllLaptops = (req, res) => {
    laptopModel.find()
        .then((response) => {
          
            res.status(200).json({ success: true, data: response });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ success: false, message: "Error fetching laptops" });
        });
};

module.exports = {
    addlaptop,
    getAllLaptops,
};
