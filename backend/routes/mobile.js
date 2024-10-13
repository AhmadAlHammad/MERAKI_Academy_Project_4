const express = require('express');

const mobileRouter = express.Router();

const {addmobile,getAllMobiles} =require('../controllers/mobile');

mobileRouter.post('/',addmobile);
mobileRouter.get('/mobiles',getAllMobiles);
module.exports = mobileRouter;