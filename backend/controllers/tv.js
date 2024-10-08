const express = require('express')
const tvModel = require('../models/tvSchema');

const addtv  = (req,res)=>{
    const {title,url,modelNumber,brand,screenSize,HDMI,Usb,rate,price }= req.body;
    
    const addtv1= new tvModel({title,url,modelNumber,brand,screenSize,HDMI,Usb,rate,price});
    
    
    addtv1.save().then((response)=>{
        res.status(200).json({sucsess: true, message: "Add Tv", auther: response })
    }).catch((err)=>{
        console.log(err);
        
        res.status(500).json({sucsess: false, message: "Cant Add "})
    })
    
    }
    
    module.exports = addtv;

    