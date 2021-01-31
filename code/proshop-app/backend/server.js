const { response } = require('express');
const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
const BACKEND_PORT = process.env.BACKEND_PORT;

app.get('/', (req,res) => {
    res.send('API is running');
});

app.get('/api/products/', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product);
});



app.listen(BACKEND_PORT, console.log(`Server running ${process.env.NODE_ENV} on port ${BACKEND_PORT}`));
