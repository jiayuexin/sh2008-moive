const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser') // 中间件
const cors = require('cors')

// 使用cors 跨域
app.use(cors());


// 使用中间件
app.use(bodyParser.urlencoded({ extended: false }));

// 使用中间件解析json数据
app.use(bodyParser.json())

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
let verify = ''
    // 中间件：验证客户端发送过来token
const checkToken = async function(req, res, next) {
    let temArr = (req.headers.authorization).split(' ')
    let _token = temArr[temArr.length - 1]
        // 验证是否合法
    try {
        verify = jwt.verify(_token, jwt_secret)
            // 二次验证为了安全
            // console.log(_token);
            // console.log(jwt_secret);
            // console.log(verify);
            // 判断时间戳是否超过自己所设置的事件
            // let nowDate = parseInt(new Date().getTime() / 1000)

        // console.log(nowDate);
        // console.log(verify.iat);
        // if (((nowDate - verify.iat) > 10)) {
        //     console.log(1232);
        // }
        let data = await Model.findOne({ userId: verify.userId })
        if (data) {
            // 合法用户
            req.body.user_id = data.userId
            next()
        } else {
            res.status(403).send({
                code: '7777',
                info: 'illegal user'
            })
        }
    } catch (error) {
        // 验证失败
        res.status(403).send({
            code: '8888',
            info: 'illegal access'
        })
    }
}

// 接口：获取登录成功的用户信息
app.get('/api/v1/user_info', checkToken, async(req, res) => {

    // 获取用户数据
    let { userId, gender, mobile, headIcon } = await Model.findOne({ userId: req.body.user_id })

    res.send({
        code: '1000',
        info: 'success',
        user_info: {
            userId,
            gender,
            mobile: mobile.substr(0, 7) + '****',
            headIcon,
            verify: verify.iat,
        }
    })
})


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
                    exp: parseInt(Date.now() / 1000) + 10,
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