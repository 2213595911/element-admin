<script setup lang="ts">
import { StoreEnum } from '@/enum/StoreEnum'
import router from '@/router'
import store from '@/utils/store'
import { ElMessage } from 'element-plus'
import Menu from './admin/menu.vue'
const logout = () => {
  store.remove(StoreEnum.token_key)
  router.push('/login')
  ElMessage({
    message: '已退出登录',
    type: 'success',
  })
}
</script>

<template>
  <div class="admin">
    <Menu />
    <main>
      <suspense>
        <template #default>
          <div>
            <div class="logout">
              <el-popconfirm title="确定要退出登录吗?" @confirm="logout">
                <template #reference>
                  <a href="javascript:;">退出登录</a>
                </template>
              </el-popconfirm>
            </div>
            <router-view />
          </div>
        </template>
        <template #fallback>
          <div>loading...</div>
        </template>
      </suspense>
    </main>
  </div>
</template>

<style scoped lang="scss">
.admin {
  display: flex;
  main {
    flex: 1;
    padding: 20px;
    .logout {
      padding: 10px 20px;
      display: flex;
      justify-content: flex-end;
      a {
        color: #222;
        text-decoration: none;
        padding: 10px 15px;
        background: rgb(144, 59, 223);
        color: white;
        border-radius: 10px;
        transition-duration: 300ms;
        &:hover {
          background: rgb(170, 96, 240);
        }
      }
    }
  }
}
</style>
