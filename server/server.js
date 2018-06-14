const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017';

mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo connect sucess');
});

// 新建app
const app = express();


app.get('/', function (req, res) {
    res.send('<h1>hello world</h1>');
});
app.get('/data', function (req, res) {
    res.json({a: 333, ll: 'eee333'});
});

app.listen(9005, function () {
    console.log('NODE app start at port 9005');
});
