const express = require('express')
const { Article } = require('../models')
const article = require('../controller/articleContorller')
const router = express.Router()
const { articleSchema } = require('../schema/article')
const expressjoi = require('@escook/express-joi')
// 获取文章列表
router.get('/', article.getArticleList.bind(article))
// 获取指定 id 文章
router.get('/:id', article.getArticleById.bind(article))
// 创建文章
router.post('/', expressjoi(articleSchema), article.createArticle.bind(article))
// 删除文章
router.delete('/:id', article.deleteArticle.bind(article))
// 修改文章
router.put('/:id', article.changeArticle.bind(article))
module.exports = router
