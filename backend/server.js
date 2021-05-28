const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const connectDb = require('./db');
const products = require('./routes/products');
const user = require('./routes/user');
const order = require('./routes/order');
const {errorMiddleware, notFound} = require('./errorMiddleware');

dotenv.config({path: 'config/.env'})
const app = express();
app.use(express.json());
connectDb();


app.use('/products', products)
app.use('/user', user)
app.use('/order', order)

// console.log(path.join(__dirname, '../frontend/build')) 

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, '/frontend', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }
  
app.use(notFound)
app.use(errorMiddleware)

const port = process.env.PORT || 5100;

app.listen(port, console.log(`port running on ${process.env.NODE_ENV} mode on port: ${port}`))