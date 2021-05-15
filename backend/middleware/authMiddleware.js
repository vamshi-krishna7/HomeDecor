const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async(req, res, next) => {   // after logging token must be present in local storage
    const decode = req.headers.authorization
    if(req.headers.authorization && req.headers.authorization.startsWith('bearer')) {
        try {
            const token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.authorizedUser = await User.findById(decoded.id).select('-password')
            next()
        }catch{
            res.status(401).json({msg: "Unauthorized"})
        }
    }else {
        res.status(401).json({msg: "Unauthorized"})
    }

})

module.exports = {protect};