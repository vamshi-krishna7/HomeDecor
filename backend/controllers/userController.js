const User = require('../models/userModel');
const asyncHandler  = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))) {
        const generateToken = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "30d"
        })
       res.status(200).json ({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken
        })
    }else{
        res.status(401).json({"msg": "Invalid Credentials"})
    }
})


const getUserProfile = asyncHandler(async(req, res) => {
    if (req.authorizedUser) {
        res.status(200).json(req.authorizedUser)
    }else {
        res.status(401).json({msg: "Unauthorized"})
    }
})


const registerUser = asyncHandler(async(req, res) => {
    let {name, email, password} = req.body;
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400).json({msg: 'user already exists'})
    }else {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt)
        const user = await User.create({
            name,
            email,
            password
        })
        const generateToken = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "30d"})
        if(user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken
            })
        }else {
            res.status(400)
            throw new Error('Invalid user details')
        }
    }
})

module.exports = {authUser, getUserProfile, registerUser};