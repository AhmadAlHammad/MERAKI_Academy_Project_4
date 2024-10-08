const express = require('express')
const tabletModel = require('../models/tabletSchema');

const addtablet  = (req,res)=>{
    const {title,url,modelNumber,brand,capacity,color,Battery,rate,price }= req.body;
    
    const addTab = new tabletModel({title,url,modelNumber,brand,capacity,color,Battery,rate,price});
    
    
    addTab.save().then((response)=>{
        res.status(200).json({sucsess: true, message: "Add Tablet", auther: response })
    }).catch((err)=>{
        console.log(err);
        
        res.status(500).json({sucsess: false, message: "Cant Add "})
    })
    
    }
    
    module.exports = addtablet;