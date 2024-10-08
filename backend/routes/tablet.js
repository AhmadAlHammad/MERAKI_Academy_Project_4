const express = require('express');

const tabletRouter = express.Router();

const addtablet =require('../controllers/tablet');

tabletRouter.post('/',addtablet);

module.exports = tabletRouter;