const express = require('express');
const dotenv = require('dotenv');

const connectDb = require('./db');
const products = require('./routes/products');
const user = require('./routes/user');
const {errorMiddleware} = require('./errorMiddleware');

dotenv.config({path: 'config/.env'})
const app = express();
app.use(express.json());
connectDb();

app.get('/', (req, res) => {
    res.json("welcome to home page")
})
app.use('/products', products)
app.use('/user', user)
// app.use(errorMiddleware)

const port = process.env.PORT || 5100;

app.listen(port, console.log(`port running on ${process.env.MODE} mode on port: ${port}`))