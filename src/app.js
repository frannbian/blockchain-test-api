const express = require('express');
const path = require('path');
const orderbookRouter = require('./routers/orderbookRouter');

const app = express();

// Setup static directory to serve 
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(orderbookRouter);

app.get('/', (req, res) => {
    res.redirect('/orderbooks/tBTCUSD')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'))
})

module.exports = app;