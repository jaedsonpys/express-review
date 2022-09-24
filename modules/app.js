const express = require('express');
const app = express();

const wiki = require('./wiki');
const about = require('./about');

app.use(wiki);
app.use('/about', about);

app.listen(5500, () => {
    console.log('Running server in http://127.0.0.1:5500');
})