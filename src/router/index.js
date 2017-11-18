import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Products from '@/components/Products'
import ProductDetails from '@/components/ProductDetails'
import NotFound from '@/components/NotFound'
// import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(Router)
// Vue.use(vueSmoothScroll)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    // new navigation.
    // scroll to anchor
    if (to.hash) {
      let rect = document.querySelector(to.hash).getBoundingClientRect()
      let top = rect.top
      window.scroll({
        top: top - 100,
        left: 0,
        behavior: 'smooth'
      })
      return
    }
    // explicitly control scroll position
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      return { x: 0, y: 0 }
    }
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: { scrollToTop: true },
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
  ],
  scrollBehavior
})
