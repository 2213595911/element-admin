<template>
  <div class="menu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>博客系统</span>
        </template>
        <el-menu-item index="1" :route="{ path: '/admin/article/add' }">添加文章</el-menu-item>
        <el-menu-item index="2" :route="{ path: '/admin/article' }">文章列表</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
.menu {
  min-width: 200px;
  ul {
    height: 100vh;
  }
}
</style>
