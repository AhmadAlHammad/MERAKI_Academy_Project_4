const express = require('express');


laptopRouter = express.Router();

const {addlaptop,getAllLaptops} =require('../controllers/laptop');

laptopRouter.post('/',addlaptop);
laptopRouter.get('/laptops',getAllLaptops)
module.exports = laptopRouter;