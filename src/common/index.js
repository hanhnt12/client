export default {
  // cut characters
  cutCharacter (strInput, length) {
    if (strInput.length > length) {
      return strInput.slice(0, length) + '...'
    } else {
      return strInput
    }
  },

  calculatePrice (price) {
    price = parseInt(price)

    if (isNaN(price)) {
      return false
    }

    return price.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  },

  getProductImage (product) {
    let images = product.image
    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        if (images[i].defaultImage) {
          return images[i].pathImage
        }
      }
    }

    return 'default image'
  }
}
