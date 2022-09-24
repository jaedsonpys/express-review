const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/json', (req, res) => {
    res.json({name: 'Jaedson', age: 15});
})

app.listen(5500, ()  => {
    console.log('Running server in http://127.0.0.1:5500')
})