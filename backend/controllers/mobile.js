const express = require('express')
const mobileModel = require('../models/mobileSchema');

const addmobile  = (req,res)=>{
    const {title,url,modelNumber,brand,capacity,color,Battery,rate,price }= req.body;
    
    const addmob = new mobileModel({title,url,modelNumber,brand,capacity,color,Battery,rate,price});
    
    
    addmob.save().then((response)=>{
        res.status(200).json({sucsess: true, message: "Add mobile", auther: response })
    }).catch((err)=>{
        console.log(err);
        
        res.status(500).json({sucsess: false, message: "Cant Add "})
    })
    
    }
    const getAllMobiles = (req, res) => {
        mobileModel.find()
            .then((response) => {
                
                res.status(200).json({ success: true, data: response });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({ success: false, message: "Error fetching mobiles" });
            });
    };
    
    module.exports = {
        addmobile,
        getAllMobiles,
    };
    

