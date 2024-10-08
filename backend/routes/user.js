const express = require('express');
const userRouter = express.Router();
const {register,loginUser} = require('../controllers/users');

userRouter.post('/register',register)

userRouter.post('/Login',loginUser)

module.exports = userRouter;

