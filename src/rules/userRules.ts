import { reactive } from 'vue'

export const loginRules = reactive({
  username: [
    {
      required: true,
      message: '用户名是必须的',
      trigger: 'blur',
    },
    {
      min: 4,
      max: 10,
      message: '用户名长度在4~10位之间',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '密码是必须的',
      trigger: 'blur',
    },
    {
      min: 6,
      max: 12,
      message: '密码长度在6~12位之间',
      trigger: 'blur',
    },
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur',
    },
  ],
})
