import { createApp } from 'vue'
import App from './App.vue'
import setupPlugins from '@/plugins'
import router from '@/router'
const app = createApp(App)

function setup() {
  setupPlugins(app)
  app.use(router)
}
setup()
app.mount('#app')
