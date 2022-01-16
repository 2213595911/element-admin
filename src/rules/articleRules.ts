import { reactive } from 'vue'

export const createArticleRule = reactive({
  title: [
    {
      required: true,
      message: '用户名是必须的',
      trigger: 'blur',
    },
  ],
  body: [
    {
      required: true,
      message: '密码是必须的',
      trigger: 'blur',
    },
  ],
})
