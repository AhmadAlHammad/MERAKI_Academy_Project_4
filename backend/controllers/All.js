const express = require('express')
const tvModel = require('../models/tvSchema');
const laptopModel = require('../models/laptopSchema');
const mobileModel = require('../models/mobileSchema');
const tabletModel = require('../models/tabletSchema');
const accessoriesModel = require('../models/accessoriesSchema');
const getAll = async (req, res) => {
       try {
        const tvs = await tvModel.find().exec();
        const laptops = await laptopModel.find().exec();
        const mobiles = await mobileModel.find().exec();
        const tablets = await tabletModel.find().exec();
        const accessories = await accessoriesModel.find().exec();

        res.status(200).json({
            success: true,
            data: {
                tvs,
                laptops,
                mobiles,
                tablets,
                accessories
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error fetching data from models" });
    }
};

module.exports = { getAll };