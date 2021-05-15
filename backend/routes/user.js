const express = require('express');
const Router = express.Router()
const {loginUser} = require('../controllers/userController')

Router.route('/').post(loginUser)
module.exports = Router;



