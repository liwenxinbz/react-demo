
const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat';

mongoose.connect(DB_URL);

const models = {
    user: {
        "user": {'type': String, 'require': true},
        "pwd": {'type': String, 'require': true},
        "type": {'type': String, 'require': true},
    //    头像
        "avatar": {'type': String},
    //    个人简介
        "desc": {'type': String},
        // 职位名
        "title": {'type': String},
    //    如果是boss
        "company": {'type': String},
        "monty": {'type': String}
    },
    chat: {
        "chatid": {'type': String, required: true},
        "form": {'type': String, required: true},
        "to": {'type': String, required: true},
        "read": {'type': Boolean, default: false},
        "content": {'type': String, required: true, default: ''},
        "create_time": {'type': Number, default: new Date().getTime()}
    }
};

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name);
    }
};