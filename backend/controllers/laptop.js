const express = require('express')
const laptopModel = require('../models/laptopSchema');

const addlaptop  = (req,res)=>{
const {title,url,capacity,brand,ram,screenSize, rate,price }= req.body;

const addAcc = new laptopModel({title,url,capacity,brand,ram,screenSize, rate,price});


addAcc.save().then((response)=>{
    res.status(200).json({sucsess: true, message: "Add laptop", auther: response })
}).catch((err)=>{
    console.log(err);
    
    res.status(500).json({sucsess: false, message: "Cant Add "})
})

}

module.exports = addlaptop;

