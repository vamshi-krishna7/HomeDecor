const express = require('express');
const Router = express.Router();
const {protect} = require('../middleware/authMiddleware');
const {placeOrder, getOrderById} = require('../controllers/orderController');

Router.route('/').post(protect, placeOrder)
Router.route('/:id').get(protect, getOrderById)

module.exports = Router;