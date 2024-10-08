const express = require('express');


accessoriesRouter = express.Router();

const addAccessories =require('../controllers/accessories');

accessoriesRouter.post('/',addAccessories);

module.exports = accessoriesRouter;