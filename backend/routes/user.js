const express = require('express');
const userRouter = express.Router();
const {register,loginUser,getuserById} = require('../controllers/users');
const authentication = require('../middleware/authentication')
userRouter.post('/register',register)

userRouter.post('/Login',loginUser)

userRouter.get("/byId/:id",authentication,getuserById)
module.exports = userRouter;

