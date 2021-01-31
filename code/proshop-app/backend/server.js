import dotenv from 'dotenv';
import express from 'express';
import products from './data/products.js';

dotenv.config();
const BACKEND_PORT = process.env.BACKEND_PORT;

const app = express();

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
