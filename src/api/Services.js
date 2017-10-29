import Api from './Api'
var path = require('path')

export default {
  // get list products
  getProducts (param) {
    var url = 'products'
    if (param) {
      url = path.resolve(url, param)
    }
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

  // add product to cart
  addToCart (productId) {
    return Api().post('cart/add/' + productId)
  },

  // load category product
  getCategory (param) {
    return Api().get('categories')
  }
}
