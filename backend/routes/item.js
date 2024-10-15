const express = require('express');

const itemRouter = express.Router();

const {catigory,addProduct,getCatigoryById} =require('../controllers/item');

itemRouter.get('/p',catigory);
itemRouter.post('/',addProduct);
itemRouter.get('/:id',getCatigoryById)

module.exports = itemRouter;