import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Products from '@/components/Products'
import ProductDetails from '@/components/ProductDetails'
import NotFound from '@/components/NotFound'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(Router)
Vue.use(vueSmoothScroll)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/:category',
      name: 'ProductsCategory',
      component: Products
    },
    {
      path: '/product/:productId/details',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
