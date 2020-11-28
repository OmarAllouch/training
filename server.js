const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

app.get('/', function(req, res) {
    res.json([
        { name: 'omar', age: 18 },
        { name: 'ibrahim', age: 19 },
        { name: 'anas', age: 16 }
    ])
});

app.listen(3000);