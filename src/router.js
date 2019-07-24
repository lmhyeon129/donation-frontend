import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import RegisterCorp from './views/RegisterCorp.vue'
import RegisterUser from './views/RegisterUser.vue'
import ProductAdd from './views/ProductAdd.vue'
import ProductList from './views/ProductList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: Home
    },*/
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/registerCorp',
      name: 'registerCorp',
      component: RegisterCorp
    },
    {
      path: '/registerUser',
      name: 'registerUser',
      component: RegisterUser
    },
    {
      path: '/productAdd',
      name: 'productAdd',
      component: ProductAdd
    },
    {
      path: '/productList',
      name: 'productList',
      component: ProductList
    }
  ]
})
