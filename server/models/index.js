const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost:27017/element-admin')

const User = mongoose.model(
  'Users',
  mongoose.Schema({
    username: { type: String, unique: true },
    password: {
      type: String,
      set(value) {
        return bcrypt.hashSync(value, 10)
      },
    },
  })
)

const Article = mongoose.model(
  'Articles',
  mongoose.Schema({
    title: { type: String },
    body: { type: String },
    author: { type: mongoose.SchemaTypes.ObjectId, ref: 'Users' },
  })
)
// 重置表
async function resetGather() {
  User.db.dropCollection('users')
}
// resetGather()
module.exports = { User, Article }
