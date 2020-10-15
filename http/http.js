const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser') // 中间件


// 使用中间件
app.use(bodyParser.urlencoded({ extended: false }));

// 专对铭文密码进行加密的中间件
const passwdCrypt = function(req, res, next) {
    // 获取用户的明文密码
    let password = req.body.password

    // 加密方法
    req.body.passwdCrypted = md5(password + md5(password).substr(5, 15))
    next()
}



// 使用mongoose

mongoose.connect("mongodb://localhost:27017/maizuo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const UserSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    headIcon: String,
    gender: Number,
});
const Model = mongoose.model("User", UserSchema, "users");

// 获取.env文件中的secret
const jwt_secret = fs.readFileSync(path.join(__dirname, '.env'), 'utf-8');

// 监听路由
// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// 获取初始的密码  (用完删掉就行了)
// 第二位参数是使用中间件
// app.post('/init', passwdCrypt, (req, res) => {
//     res.send('your init password is ' + req.body.passwdCrypted)

// })

// 用户登录验证
app.post('/api/v1/login', passwdCrypt, async(req, res) => {

    // 获取用户名(手机号)和密码
    let { mobile, passwdCrypted } = req.body;
    // 查询数据表
    let result = await Model.findOne({ mobile, password: passwdCrypted })
    if (result) {
        res.send({
            code: '1000',
            info: 'login success',
            data: {
                _token: jwt.sign({

                    // 存放在载荷中的数据
                    userId: result.userId,
                    mobile: result.mobile.substr(0, 7) + '****'
                }, jwt_secret)
            }
        })
    } else {
        res.send({
            code: '9999',
            info: 'mobile or password is invalid',
            data: {}
        })
    }
})

app.listen('3000', () => {
    console.log('Server is running at http://127.0.0.1:3000');
})