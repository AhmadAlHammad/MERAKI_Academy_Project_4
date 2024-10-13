const express = require('express')
const tvModel = require('../models/tvSchema');
const laptopModel = require('../models/laptopSchema');
const mobileModel = require('../models/mobileSchema');
const tabletModel = require('../models/tabletSchema');
const accessoriesModel = require('../models/accessoriesSchema');
const getAll = (req, res) => {
    (laptopModel,tvModel,mobileModel,accessoriesModel,tabletModel).find()
        .then((response) => {
          
            res.status(200).json({ success: true, data: response });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ success: false, message: "Error fetching laptops" });
        });
};
module.exports = {getAll}