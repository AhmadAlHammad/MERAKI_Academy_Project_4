const express = require('express');
// const {authentication} = require('../middleware/authentication');
const authorisation =require('../middleware/authorisation');

const cartRouter = express.Router();

const {addToCart} =require('../controllers/cart');
const authentication = require('../middleware/authentication');

cartRouter.post('/Add',authentication,addToCart);

module.exports = cartRouter;