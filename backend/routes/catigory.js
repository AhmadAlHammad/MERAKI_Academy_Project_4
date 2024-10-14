const express = require('express');

const catigoryRouter = express.Router();

const {catigory,addProduct,getCatigoryById} =require('../controllers/catigory');

catigoryRouter.get('/p',catigory);
catigoryRouter.post('/',addProduct);
catigoryRouter.get('/:id',getCatigoryById)

module.exports = catigoryRouter;