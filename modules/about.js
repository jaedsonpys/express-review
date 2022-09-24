const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('About page');
})

router.get('/since', (req, res) => {
    res.send('History of company');
})

module.exports = router;