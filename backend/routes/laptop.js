const express = require('express');


laptopRouter = express.Router();

const addlaptop =require('../controllers/laptop');

laptopRouter.post('/',addlaptop);

module.exports = laptopRouter;