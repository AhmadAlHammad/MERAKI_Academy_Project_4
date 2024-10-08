const express = require('express');

const tvRouter = express.Router();

const addtv =require('../controllers/tv');

tvRouter.post('/',addtv);

module.exports = tvRouter;