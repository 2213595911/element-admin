<template>
  <el-form ref="formRef" :model="form" label-width="120px" :rules="createArticleRule">
    <el-form-item label="文章标题" prop="title">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容" prop="body">
      <el-input v-model="form.body" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">修改</el-button>
      <el-button @click="$router.go(-1)">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ArticleForm, changeArticleApi, getArticleByIdApi } from '@/apis/articleApi'
import { createArticleRule } from '@/rules/articleRules'
import { ElForm, ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()
const formRef = ref<InstanceType<typeof ElForm>>()
const form = ref<ArticleForm>({
  title: '',
  body: '',
})

const result = await getArticleByIdApi(route.params.id as string)
form.value = result
const onSubmit = async () => {
  formRef.value?.validate(async valid => {
    if (!valid) return
    const result = await changeArticleApi(route.params.id as string)
    ElMessage({
      message: result.message,
      type: 'success',
    })
    router.go(-1)
  })
}
</script>
<style lang="scss" scoped>
form {
  width: 500px;
}
</style>
