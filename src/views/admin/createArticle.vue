<template>
  <el-form ref="formRef" :model="form" label-width="120px" :rules="createArticleRule">
    <el-form-item label="文章标题" prop="title">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容" prop="body">
      <el-input v-model="form.body" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">创建</el-button>
      <el-button @click="$router.push({ name: 'article' })">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ArticleForm, createArticleApi, getArticleListApi } from '@/apis/articleApi'
import { createArticleRule } from '@/rules/articleRules'
import { ElForm, ElMessage } from 'element-plus'
import router from '@/router'

const formRef = ref<InstanceType<typeof ElForm>>()
const form = reactive<ArticleForm>({
  title: '',
  body: '',
})

const onSubmit = async () => {
  formRef.value?.validate(async valid => {
    if (!valid) return
    const result = await createArticleApi(form)
    ElMessage({
      message: result.message,
      type: result.message === '创建成功' ? 'success' : 'error',
    })
    router.push('/admin/article')
  })
}
</script>
<style lang="scss" scoped>
form {
  width: 500px;
}
</style>
