<template>
  <div class="login">
    <h2>注册界面</h2>
    <el-form ref="ruleFormRef" :rules="loginRules" :model="form" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-row>
          <el-col :span="12">
            <el-input v-model="form.code"></el-input>
          </el-col>
          <el-col :span="2" :offset="2">
            <el-button v-if="delay === 0" type="primary" @click="getCheckCode">发送验证码</el-button>
            <el-button v-else type="info" @click="getCheckCode" disabled>请{{ delay }}秒之后重试</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="registryUser()">注册</el-button>
        <el-button @click="back">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ElForm, ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
import router from '@/router'
import { getCodeApi, UserType, registryApi } from '@/apis/userApi'
import { loginRules } from '@/rules/userRules'
// do not use same name with ref

const ruleFormRef = ref<InstanceType<typeof ElForm>>()
const form = reactive<UserType>({
  username: '',
  password: '',
  code: '',
})

// 注册用户
const registryUser = () => {
  ruleFormRef.value!.validate(async valid => {
    if (!valid) return
    const result = await registryApi(form)
    ElMessage({
      message: result.message,
      type: result.message === '注册成功' ? 'success' : 'error',
    })
    router.push('/login')
  })
}
const back = () => {
  router.go(-1)
}

// 获取验证码
const delay = ref(0)
const getCheckCode = async () => {
  const result = await getCodeApi()
  form.code = result.code
  delay.value = 60
  delay.value--
  const id = setInterval(() => {
    delay.value--
    if (!delay.value) {
      clearInterval(id)
    }
  }, 1000)
}
</script>
<style scoped lang="scss">
.login {
  width: 500px;
  padding: 40px 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  h2 {
    font-size: 28px;
    text-align: center;
    margin-bottom: 15px;
  }
}
</style>
