const express = require('express');
const Router = express.Router();
const {getAllProducts, getSingleProduct} = require('../controllers/productController')

Router.route('/').get(getAllProducts) 
Router.route('/:id').get(getSingleProduct)

module.exports = Router;