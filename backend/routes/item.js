const express = require('express');

const itemRouter = express.Router();

const {catigory,addProduct,getCatigoryById,search} =require('../controllers/item');

itemRouter.get('/p',catigory);
itemRouter.get('/serach',search);

itemRouter.post('/',addProduct);
itemRouter.get('/:id',getCatigoryById)


module.exports = itemRouter;