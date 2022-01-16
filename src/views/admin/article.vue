<template>
  <el-table ref="singleTableRef" :data="articles" highlight-current-row style="width: 100%">
    <el-table-column type="index" label="#" width="50" />
    <el-table-column property="title" label="标题" width="120" />
    <el-table-column property="body" label="内容" width="500" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.row._id)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, ElTable } from 'element-plus'
import { Article, deleteArticleApi, getArticleListApi } from '@/apis/articleApi'
import router from '@/router'
const singleTableRef = ref<InstanceType<typeof ElTable>>()

const articles = ref<Article[]>([])
articles.value = await getArticleListApi()

const handleEdit = (id: string) => {
  router.push(`/admin/article/edit/${id}`)
}
const handleDelete = async (id: string) => {
  const result = await deleteArticleApi(id)
  articles.value = await getArticleListApi()
  ElMessage({
    message: result.message,
    type: 'error',
  })
}
</script>
