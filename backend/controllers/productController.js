const Product = require('../models/productModel');
const asyncHandler  = require('express-async-handler');


const getAllProducts = asyncHandler(async(req, res) => {
    const allProducts = await Product.find()
    res.status(200).json(allProducts)
})

const getSingleProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(product) {
        res.status(200).json(product)
    }else {
        res.status(404).json({msg: 'product not found'})
    }
})


module.exports = {getAllProducts, getSingleProduct}