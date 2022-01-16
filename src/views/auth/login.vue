<template>
  <div class="login">
    <h2>登录界面</h2>
    <el-form ref="ruleFormRef" :rules="loginRules" :model="form" label-width="60px">
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">登录</el-button>
        <el-button @click="registry()">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ElForm, ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
import router from '@/router'
import { loginRules } from '@/rules/userRules'
import { UserType, loginApi } from '@/apis/userApi'
import store from '@/utils/store'
import { StoreEnum } from '@/enum/StoreEnum'

const ruleFormRef = ref<InstanceType<typeof ElForm>>()
const form = reactive<UserType>({
  username: 'admin2',
  password: '123456',
})

const login = () => {
  ruleFormRef.value!.validate(async valid => {
    if (!valid) return
    const result = await loginApi(form)
    ElMessage({
      message: result.message,
      type: result.message === '登录成功' ? 'success' : 'error',
    })
    if (result.token) {
      store.set(StoreEnum.token_key, `Bearer ${result.token}`)
      router.push('/admin')
    }
  })
}
const registry = () => {
  router.push('/registry')
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
    text-align: center;
    margin-bottom: 15px;
    font-size: 28px;
  }
}
</style>
