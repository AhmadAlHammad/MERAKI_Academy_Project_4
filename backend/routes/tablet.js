const express = require('express');

const tabletRouter = express.Router();

const {addtablet,getAllTablets} =require('../controllers/tablet');

tabletRouter.post('/',addtablet);
tabletRouter.get('/tabltes',getAllTablets)

module.exports = tabletRouter;