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
    const getAllTablets = (req, res) => {
        tabletModel.find()
            .then((response) => {
               
                res.status(200).json({ success: true, data: response });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({ success: false, message: "Error fetching tablets" });
            });
    };
    
    module.exports = {
        addtablet,
        getAllTablets,
    };
