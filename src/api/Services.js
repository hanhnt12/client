import Api from './Api'
var path = require('path')

export default {
  // get list products
  getProducts (param) {
    var url = 'products'
    if (param) {
      url = path.resolve(url, param)
    }
    console.log('url request: ' + url)
    return Api().get(url)
  },

  // get product details
  getProduct (productId) {
    var url = 'products/product'
    if (productId) {
      url = path.resolve(url, productId)
    }
    return Api().get(url)
  },

  // udpate number of views product
  updateViewProduct (productId) {
    var url = 'products/product/update'
    if (productId) {
      url = path.resolve(url, productId)
    }
    return Api().post(url)
  },

  // load category product
  getCategory (param) {
    return Api().get('categories')
  }
}
