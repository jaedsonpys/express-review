const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Wiki homepage');
})

router.get('/posts', (req, res) => {
    res.send('All posts from Wiki');
})

module.exports = router;