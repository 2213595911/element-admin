const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const expressjwt = require('express-jwt')
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(expressjwt({ secret: process.env.SECRET_KEY, algorithms: ['HS256'] }).unless({ path: [/^\/user\//] }))
const userRouter = require('./router/user')
const articleRouter = require('./router/article')

app.get('/', async (req, res) => {
  res.send('ok')
})
app.use('/user', userRouter)
app.use('/article', articleRouter)

app.use((error, req, res, next) => {
  if (error.name === 'UnauthorizedError') {
    return res.send({
      message: 'token认证失败',
    })
  }
  res.send({
    message: '服务器内部错误',
  })
})
app.listen(3007, () => {
  console.log('server running at http://127.0.0.1:3007')
})
