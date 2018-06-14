const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017';

mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo connect sucess');
});

const User = mongoose.model('user', new mongoose.Schema({
    // user: {type: String, required: true},
    // age: {type: Number, required: true}
}))

// 新增数据
// User.create({
// 	user:'xiaohua',
// 	age:12
// },function(err, doc){
// 	if (!err) {
// 		console.log(doc)
// 	}else{
// 		console.log(err)
// 	}
// })
// 新建app
// User.remove({age:18},function(err,doc){
// 	console.log(doc)
// })
// User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
// 	console.log(doc)
// })
const app = express();
app.get('/', function (req, res) {
    res.send('<h1>hello world</h1>');
});

app.get('/data', function (req, res) {
    User.findOne({}, function (err, doc) {
        res.json(doc)
    })
});

app.listen(9093, function () {
    console.log('NODE app start at port 9005');
});
