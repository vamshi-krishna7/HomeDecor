const express = require('express');
const dotenv = require('dotenv');

const connectDb = require('./db');
const products = require('./products');

dotenv.config({path: 'config/.env'})
const app = express();
connectDb();

console.log(process.env.MODE)
console.log(process.env.PORT)
app.get('/', (req, res) => {
    res.json("welcome to home page")
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const product = products.find((singleProduct) => singleProduct._id === req.params.id)
    res.json(product);
})

const port = process.env.PORT || 5100;

app.listen(port, console.log(`port running on ${process.env.MODE} mode on port: ${port}`))