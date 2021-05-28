const Order = require('../models/orderModel');
const asyncHandler  = require('express-async-handler');


const placeOrder = asyncHandler(async(req, res) => {
    console.log(req.body)
    const {orderItems, shippingAddress, paymentMethod, taxPrice, shippingPrice, totalPrice} = req.body;
    if(orderItems && orderItems.length === 0){
        console.log('came here ')
        return res.status(400).json({msg: 'No Order items'})
    }else {
        
        const order = new Order({
            user: req.authorizedUser._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            taxPrice,
            shippingPrice,
            totalPrice
        })
    
        const placeOrder = await order.save()
        console.log('saved')
        return res.status(201).json(placeOrder)

    
    }
})

module.exports = {placeOrder}





// {
//     "orderItems": [
//       {
//          "productId": "60a556b5ec69db1eb07cfa08",
//           "type": "HomeDecor Basic",
//           "rating": 4,
//          "numReviews": 8,
//          "price": 1500,
//          "countInStock": 7,
//           "_id": "60a556b5ec69db1eb07cfa08",
//          "name": "Pink & White Textured Ceramic Vase",
//           "image": "/AAA/Final/2.png",
//           "description": "Spiral Pottery range from VarEesha presents vases in pastel and basic shades with hand carved spirals all over. These are made of premium ceramic and look good as decoratives even without sticks or flowers.",
//           "brand": "HomeDecor",
//           "user": "60a556b5ec69db1eb07cfa03",
//         "reviews": [],
//          "__v": 0,
//          "qty": 3
//         }
//       ],
//       "shippingAddress": {
//         "address": "chennai #2, trivandrum road",
//         "city": "bangalore",
//         "pincode": 560019
//       },
//       "paymentMethod": "Paypal",
//       "taxPrice": 2700.00,
//       "shippingPrice": 0,
//       "totalPrice": 22200.00
//     }