const { Article } = require('../models')
const jwt = require('jsonwebtoken')
class articleConttoller {
  // 获取文章列表
  async getArticleList(req, res) {
    const articles = await Article.find({
      author: req.user.id,
    })
    res.send(articles)
  }
  // 获取指定文章
  async getArticleById(req, res) {
    const article = await Article.findById(req.params.id)
    res.send(article)
  }
  // 创建文章并关联作者
  async createArticle(req, res) {
    const article = await Article.create({
      title: req.body.title,
      body: req.body.body,
      author: req.user.id,
    })
    res.send({
      data: article,
      message: '创建成功',
    })
  }
  // 删除文章
  async deleteArticle(req, res) {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
      message: '删除成功',
    })
  }
  // 修改文章信息
  async changeArticle(req, res) {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
      message: '修改成功',
    })
  }
}

module.exports = new articleConttoller()
