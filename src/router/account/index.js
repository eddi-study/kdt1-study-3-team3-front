import Vue from 'vue'
import VueRouter from 'vue-router'

import AccountRegisterPage from '@/views/account/AccountRegisterPage.vue'
import NormalAccountRegisterPage from '@/views/account/NormalAccountRegisterPage.vue'
import BusinessAccountRegisterPage from '@/views/account/BusinessAccountRegisterPage.vue'
import AccountLoginPage from '@/views/account/AccountLoginPage.vue'
import AccountMyPage from '@/views/account/AccountMyPage.vue'

Vue.use(VueRouter)

const accountRoutes = [
  {
    path: '/signup',
    name: 'AccountRegisterPage',
    component: AccountRegisterPage
  },
  {
    path: '/signup-normal',
    name: 'NormalAccountRegisterPage',
    component: NormalAccountRegisterPage
  },
  {
    path: '/signup-business',
    name: 'BusinessAccountRegisterPage',
    component: BusinessAccountRegisterPage
  },
  {
    path: '/account-login',
    name: 'AccountLoginPage',
    component: AccountLoginPage
  },
  {
    path: '/myPage',
    name: 'AccountMyPage',
    component: AccountMyPage
  },
]

export default accountRoutes
