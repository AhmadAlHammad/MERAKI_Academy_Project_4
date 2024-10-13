const express = require('express');


const AllRouter = express.Router();

const {getAll} =require('../controllers/All');

AllRouter.get('/',getAll);

module.exports = AllRouter;