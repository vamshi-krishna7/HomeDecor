const express = require('express');
const Router = express.Router()
const {authUser, getUserProfile, registerUser, updateUserProfile} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware');

Router.route('/login').post(authUser)
Router.route('/').post(registerUser)
Router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
module.exports = Router;