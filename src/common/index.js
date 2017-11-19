export default {
  // cut characters
  cutCharacter (strInput, length) {
    if (strInput.length > length) {
      return strInput.slice(0, length) + '...'
    } else {
      return strInput
    }
  },

  // export price
  calculatePrice (price) {
    price = parseInt(price)

    if (!price || isNaN(price)) {
      return 'Liên hệ'
    }

    return price.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + '₫'
  },

  /**
   * get product details image (default image)
   */
  getProductImage (product, isHeaderBar) {
    if (isHeaderBar && product && product.image) {
      return product.image[0].pathImage
    }
    // get all image of product
    let images = product.image
    // if have image
    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        if (images[i].defaultImage) {
          return images[i].pathImage
        }
      }
    }

    return '/static/img/no-image.jpg'
  },

  createFBSEO (document, product) {
    // setting title
    if (product.title) {
      document.title = product.title || 'Lam trang petstore'
    }

    // setting facebook share and like
    document.head.querySelector('meta[property="og:url"]').content = product.urlShareFB
    document.head.querySelector('meta[property="og:type"]').content = 'website'
    document.head.querySelector('meta[property="og:description"]').content = product.description
    document.head.querySelector('meta[property="og:image"]').content = 'https://dummyimage.com/800x500/48ff00/ffffff.jpg'
  }
}
