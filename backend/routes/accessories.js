const express = require('express');


accessoriesRouter = express.Router();

const {addAccessories,getAllAccessories} =require('../controllers/accessories');

accessoriesRouter.post('/',addAccessories);
accessoriesRouter.get('/Accessories',getAllAccessories)

module.exports = accessoriesRouter;