<template>
<!-- Page Content -->
<div class="container">

  <!-- Portfolio Item Heading -->
  <h1 class="my-4">{{product.title}}
    <small>{{product.category.name}}</small>
  </h1>

  <!-- Portfolio Item Row -->
  <div class="row">

    <div class="col-md-8">
      <img class="img-fluid" :src="getProductImage(product)" alt="">
    </div>

    <div class="col-md-4">
      <h3 class="my-3">Project Description</h3>
      <p>{{product.description}}</p>
      <h3 class="my-3">Project Details</h3>
      <ul>
        <li>Lorem Ipsum</li>
        <li>Dolor Sit Amet</li>
        <li>Consectetur</li>
        <li>Adipiscing Elit</li>
      </ul>
    </div>

  </div>
  <!-- /.row -->

  <!-- Related Projects Row -->
  <h3 class="my-4">Related Image</h3>

  <div class="row">

    <div class="col-md-3 col-sm-6 mb-4" v-for="(img, index) in getOtherImages(product)" :key="index">
      <a href="#">
        <img class="img-fluid" :src="img" alt="">
      </a>
    </div>
  </div>
  <!-- /.row -->

</div>
<!-- /.container -->
</template>

<script>
import Services from '@/api/Services'
import Common from '@/common'

export default {
  name: 'ProductDetails',
  components: {
  },

  data () {
    return {
      loading: false,
      product: {}
    }
  },

  methods: {
    // get product details
    async getProduct (productId) {
      try {
        this.error = this.post = null
        this.loading = true

        var response = await Services.getProduct(productId)

        this.product = response.data

        this.loading = false
      } catch (e) {
        this.$emit('error', e)
        console.log(e)
      }
    },

    // get product image
    getProductImage (product) {
      return Common.getProductImage(product)
    },

    // convert product price
    calculatePrice (price) {
      return Common.calculatePrice(price)
    },

    // update view
    async updateViewProduct (productId) {
      try {
        // call service to get list categories
        let result = await Services.updateViewProduct(productId)
        console.log(result)
      } catch (e) {
        this.$store.dispatch('handleError', 'failed')
      }
    },

    getOtherImages (product) {
      // get default image
      let defaultImage = this.getProductImage(product)
      let images = product.image
      let result = []
      // loop all image
      if (images.length > 1) {
        for (let i = 0; i < images.length; i++) {
          let imagePath = images[i].pathImage
          if (imagePath !== defaultImage) {
            result.push(imagePath)
          }
        }
      }

      return result
    }
  },

  created () {
    let productId = this.$route.params.productId
    this.updateViewProduct(productId)
    this.getProduct(productId)
  },

  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 992px) {
  body {
    padding-top: 56px;
  }
}
</style>
