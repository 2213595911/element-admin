import { StoreEnum } from './../enum/StoreEnum'
import store from '@/utils/store'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}
  run() {
    this.router.beforeEach(this.beforeEach)
  }
  beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (to.name === 'login' || to.name === 'registry') {
      return true
    } else {
      if (!store.get(StoreEnum.token_key)) return { name: 'login' }
    }
  }
}

export default function setupGuard(router: Router) {
  new Guard(router).run()
}
