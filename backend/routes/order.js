const express = require('express');
const Router = express.Router();
const {protect} = require('../middleware/authMiddleware');
const {placeOrder} = require('../controllers/orderController');

Router.route('/').post(protect, placeOrder)

module.exports = Router;