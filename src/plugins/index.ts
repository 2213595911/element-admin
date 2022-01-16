import { App } from 'vue'
import setupElementPlus from './elementplus'
import http from './axios'

export default function setupPlugins(app: App) {
  setupElementPlus(app)
}
export { http }
