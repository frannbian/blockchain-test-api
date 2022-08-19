const express = require('express');
const { getBooks } = require('../services/bitfinexService');
const router = new express.Router();

router.get('/orderbooks/:pairName', async (req, res) => {
    const _pairName = req.params.pairName;
    try {
        const books = await getBooks(_pairName);
        res.send({ books});
    } catch (e) {
        res.status(400).send(e);
    } 
});

module.exports = router;