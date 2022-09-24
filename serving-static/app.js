const express = require('express');
const app = express();

// serving static files
app.use('/public', express.static('./serving-static/public'));

app.listen(5500, () => {
    console.log('Running in http://127.0.0.1:5500');
})