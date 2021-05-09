const express = require('express');
const dotenv = require('dotenv');

const connectDb = require('./db');
const products = require('./routes/products');
const {errorMiddleware} = require('./errorMiddleware');

dotenv.config({path: 'config/.env'})
const app = express();
connectDb();

app.get('/', (req, res) => {
    res.json("welcome to home page")
})
app.use('/products', products)
app.use(errorMiddleware)

const port = process.env.PORT || 5100;

app.listen(port, console.log(`port running on ${process.env.MODE} mode on port: ${port}`))