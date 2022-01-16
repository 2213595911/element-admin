const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
class userConttoller {
  constructor() {
    this.codes = []
  }
  // 随机生成 4 位数验证码
  randomCode(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  // 获取验证码
  async getCode(req, res) {
    const code = this.randomCode.bind(this, 1000, 9999)()
    res.send({
      code,
    })
    this.codes.push(code)
  }
  // 注册用户
  async registry(req, res) {
    const find = await User.findOne({
      username: req.body.username,
    })
    if (find) {
      return res.send({
        message: '用户名已存在',
      })
    }
    console.log(this.codes)
    const valid = this.codes.some(code => code === req.body.code)
    if (!valid) {
      return res.send({
        message: '验证码无效',
      })
    }
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
    })
    res.send({
      user,
      message: '注册成功',
    })
  }
  // 获取用户列表
  async getUserList(req, res) {
    const users = await User.find()
    res.send(users)
  }
  // 登录
  async login(req, res) {
    const user = await User.findOne({
      username: req.body.username,
    })
    if (!user) {
      return res.send({
        message: '用户名不存在',
      })
    }
    const isValid = bcrypt.compareSync(req.body.password, user.password)
    if (!isValid) {
      return res.send({
        message: '密码错误',
      })
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
    res.send({
      message: '登录成功',
      token,
    })
  }
}

module.exports = new userConttoller()
