const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/userModel');
const Product = require('./models/productModel');
const connectDb = require('./db');

dotenv.config({path: './config/.env'})
connectDb();

const importData = async() => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        // order yet to added

        const allUsers = await User.insertMany(users)
        const storeAdminId = allUsers[0]._id;     // only admins can add products
        const allProducts = products.map((product) => {
            return {
                ...product,
                user: storeAdminId
            }
        })
        await Product.insertMany(allProducts)
        console.log('Imported Data Successfully')
        process.exit()
    }catch(err) {
        console.error(err.message)
        process.exit(1)
    }
}
const deleteData = async() => {
    try{
        await User.deleteMany();
        await Product.deleteMany();
        // order yet to added
        console.log('Deleted All Data')
        process.exit()
    }catch(err) {
        consol.error(err.message)
        process.exit(1)
    }
}


if(process.argv[2] === '-d'){
    deleteData()
}else {
    importData()
}







