const express = require('express');
const Router = express.Router();
const Product = require('../models/productModel');
const asyncHandler  = require('express-async-handler');

Router.get('/', asyncHandler(async(req, res) => {
        const allProducts = await Product.find()
        res.status(200).json(allProducts)
}))

Router.get('/:id', asyncHandler(async(req, res) => {
        const product = await Product.findById(req.params.id)
        if(product) {
            res.status(200).json(product)
        }else {
            res.status(404).json({msg: 'product not found'})
        }
}))


module.exports = Router;