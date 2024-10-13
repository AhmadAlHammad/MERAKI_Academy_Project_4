const express = require('express')
const accessoriesModel = require('../models/accessoriesSchema');

const addAccessories  = (req,res)=>{
const {title,url,modelNumber,brand,type,color, rate,price }= req.body;

const addAcc = new accessoriesModel({title,url,modelNumber,brand,type,color,rate,price});


addAcc.save().then((response)=>{
    res.status(200).json({sucsess: true, message: "Add accessory", auther: response })
}).catch((err)=>{
    console.log(err);
    
    res.status(500).json({sucsess: false, message: "Cant Add "})
})

}


const getAllAccessories = (req, res) => {
    accessoriesModel.find()
        .then((response) => {
           
            res.status(200).json({ success: true, data: response });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ success: false, message: "Error fetching accessories" });
        });
};

module.exports = {
    addAccessories,
    getAllAccessories,
};


