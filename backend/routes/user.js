const express = require('express');
const Router = express.Router()
const {authUser, getUserProfile, registerUser} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware');

Router.route('/login').post(authUser)
Router.route('/profile').get(protect, getUserProfile)
Router.route('/').post(registerUser)
module.exports = Router;