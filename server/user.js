const express = require('express');

const Router = express.Router();

const utils = require('utility');

const models = require('./model');

const User = models.getModel('user');

const _filter = {__v: 0, pwd: 0};

Router.get('/list', function (req, res) {
    // User.remove({}, function () {}); // 删除全部
    User.find({}, function (err, doc) {
        return res.json(doc);
    })
});

Router.post('/register', function (req, res) {
    const {user, pwd, type} = req.body;
    User.findOne({user}, function (err, doc) {
        if (doc) {
            return res.json({code: 1, msg: '用户名重复'});
        }
        User.create({user, pwd: md5PWd(pwd), type}, function (e, d) {
            if (e) {
                return res.json({code: 1, msg: '后端出错了'});
            }
            return res.json({code: 0, msg: '注册成功'});
        })
    })
});

Router.post('/login', function (req, res) {

    const {user, pwd} = req.body;

    User.findOne({user, pwd: md5PWd(pwd)}, _filter, function (err, doc) {
        if (err) {
            return res.json({code: 1, msg: '后端出错了'});
        }
        if (!doc) {
            return res.json({code: 1, msg: '用户名不存在或者密码错误'});
        }

        res.cookie('userid', doc._id);

        return res.json({code: 0, data: doc})
    })
});

Router.get('/info', function (req, res) {
    const {userid} = req.cookies;
    if (!userid) {
        return res.json({code: 1});
    }
    User.findOne({_id: userid}, _filter, function (err, doc) {
        if (err) {
            return res.json({code: 1, msg: '后台出错'});
        }
        if (doc) {
            return res.json({code: 0, data: doc});
        }
    })
});

function md5PWd(pwd) {
    const salt = 'kdfjieqnnvyrowuh833jh2j45_df8#$%#*&@(;FJI';

    return utils.md5(utils.md5(pwd + salt));
}

module.exports = Router;
