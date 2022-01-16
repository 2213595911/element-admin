import { http } from '@/plugins'

export interface Article {
  _id: string
  title: string
  body: string
  author: string
  __v: string
}
interface CreateArticle {
  data: Article
  message: string
}
export interface ArticleForm {
  title: string
  body: string
}
interface Message {
  message: string
}
// 文章列表
export const getArticleListApi = async () => {
  return http.request<Article[]>({
    url: '/article',
  })
}
// 单个文章
export const getArticleByIdApi = async (id: string) => {
  return http.request<Article>({
    url: `/article/${id}`,
  })
}
// 添加文章
export const createArticleApi = async (data: ArticleForm) => {
  return http.request<CreateArticle>({
    url: '/article',
    method: 'post',
    data,
  })
}
// 删除文章
export const deleteArticleApi = async (id: string) => {
  return http.request<CreateArticle>({
    url: `/article/${id}`,
    method: 'delete',
  })
}
// 修改文章
export const changeArticleApi = async (id: string) => {
  return http.request<Message>({
    url: `/article/${id}`,
    method: 'put',
  })
}
