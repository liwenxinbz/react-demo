
const express = require('express');

const Router = express.Router();

const utils = require('utility');

const models = require('./model');

const User = models.getModel('user');
const Chat = models.getModel('chat');

const _filter = {__v: 0, pwd: 0};

Router.get('/list', function (req, res) {
  const { type } = req.query
  // User.remove({},function(e,d){})
  User.find({type},function(err,doc){
    return res.json({code:0,data:doc})
  })
});

Router.get('/getmsglist', function (req, res) {
  const user = req.cookies.user;

  Chat.find({}, function (err, doc) {
    if (!err) {
        return res.json({code: 0, data: doc})
    }
  })
});

Router.post('/register', function (req, res) {
    const {user, pwd, type} = req.body;
    User.findOne({user}, function (err, doc) {
        if (doc) {
            return res.json({code: 1, msg: '用户名重复'});
        }

        // create 方法不能返回用户id 所以用save方法
        const userModel = new User({user, type, pwd: md5PWd(pwd)});

        userModel.save(function (e, d) {
            if (e) {
                return res.json({code: 1, msg: '后端出错了'});
            }
            const {user, type , _id} = d;
            res.cookie('userid', _id);
            return res.json({code: 0, data: {user, type, _id}, msg: '注册成功'});
        });
        // User.create({user, pwd: md5PWd(pwd), type}, function (e, d) {
        //     if (e) {
        //         return res.json({code: 1, msg: '后端出错了'});
        //     }
        //     return res.json({code: 0, msg: '注册成功'});
        // })
    })
});

Router.post('/update', function (req, res) {
    const userid = req.cookies.userid;
    if (!userid) {
        return res.json({code: 1});
    }
    const body = req.body;
    User.findByIdAndUpdate(userid, body, function (err, doc) {
        if (err) {
            return res.json({code: 1, msg: '后端出错了'});
        }
        if (!doc) {
            return res.json({code: 1, msg: '用户名不存在'});
        }
        const body = req.body
        const data = Object.assign({}, {
            type: doc.type,
            user: doc.user
        }, body);
        return res.json({code: 0, data});
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

        const data = Object.assign({}, {
            type: doc.type,
            user: doc.user,
            avatar: doc.avatar
        }, res.body);

        return res.json({code: 0, data});
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
