const express = require('express');

const tvRouter = express.Router();

const {addtv,getAllTVs} =require('../controllers/tv');
tvRouter.post('/',addtv);
tvRouter.get('/tvs',getAllTVs)

module.exports = tvRouter;