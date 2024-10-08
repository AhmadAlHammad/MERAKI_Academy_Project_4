const express = require('express');

const mobileRouter = express.Router();

const addmobile =require('../controllers/mobile');

mobileRouter.post('/',addmobile);

module.exports = mobileRouter;