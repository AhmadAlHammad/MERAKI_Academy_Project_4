const express = require('express');
const roleRouter = express.Router();
const createRole = require('../controllers/role');
const authentication = require('../middleware/authentication');
roleRouter.post('/'  ,createRole);

module.exports = roleRouter;