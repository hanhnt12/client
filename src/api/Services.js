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

  // load category product
  getCategory (param) {
    return Api().get('categories')
  },

  // get portfolio
  getPortfolio () {
    return Api().get('portfolio')
  },

  // get contact informatin
  getContactInfo () {
    return Api().get('contact')
  },

  // get banner information
  getBannerInfo () {
    return Api().get('banner')
  }
}
