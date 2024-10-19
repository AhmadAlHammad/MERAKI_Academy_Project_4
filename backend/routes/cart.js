const express = require('express');
// const {authentication} = require('../middleware/authentication');
const authorisation =require('../middleware/authorisation');

const cartRouter = express.Router();

const {addToCart,gitAllItem} =require('../controllers/cart');

const authentication = require('../middleware/authentication');

cartRouter.put('/Add/',addToCart);
cartRouter.get('/git/:userId',gitAllItem);
module.exports = cartRouter;