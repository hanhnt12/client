<template>
<!-- Page Content -->
<div class="container">

  <div class="row">

    <div class="col-lg-3">

      <h1 class="my-4">Category</h1>
      <div class="list-group">
        <router-link v-for="category in categories" 
          :key="category._id"
          :to="{path: '/products/' + category.name}" 
          class="list-group-item">{{category.name}} &gt;&gt;</router-link>
      </div>

    </div>
    <!-- /.col-lg-3 -->

    <div class="col-lg-9">

      <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="row">

        <div class="col-lg-4 col-md-6 mb-4" 
          v-for="product in products" 
          :key="product._id">
          <div class="card h-100">
            <a href="#"
              @click.prevent="showImages(product)">
                <img class="card-img-top" :src="getProductImage(product)" alt="">
            </a>
            <div class="card-body">
              <h4 class="card-title">
                <router-link
                  :to="{path: '/product/' + product._id + '/details'}">{{product.title}}</router-link>
                </a>
              </h4>
              <h5 v-if="product.price" class="price">{{calculatePrice(product.price)}}</h5>
              <p v-if="product.description" class="card-text">{{cutCharacter(product.description)}}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.col-lg-9 -->

  </div>
  <!-- /.row -->

  <product :showProduct="showProduct" :product="product" @close="showProduct = false"/>
  <images :showImage="showImage" :product="product" @close="showImage = false"/>

</div>
<!-- /.container --> 
</template>

<script>
import Services from '@/api/Services'
import Common from '@/common'
import Product from '@/components/Product'
import Images from '@/components/ImagesSlider'

export default {
  name: 'NavBar',

  data () {
    return {
      products: [],
      categories: [],
      loading: false,
      product: {},
      showProduct: false,
      images: [],
      showImage: false
    }
  },

  components: {
    Product,
    Images
  },

  methods: {
    // get list products
    async getProducts (category) {
      try {
        this.error = this.post = null
        this.loading = true

        var response = await Services.getProducts(category)

        this.products = response.data

        this.loading = false

        console.log(this.category)
        console.log(this.products)
      } catch (e) {
        this.$emit('error', e)
        console.log(e)
      }
    },

    // load categories on start up
    async getCategories () {
      try {
        // call service to get list categories
        const categories = await Services.getCategory()
        this.categories = categories.data
      } catch (e) {
        this.$store.dispatch('handleError', 'failed')
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

    // cut characters
    cutCharacter (input) {
      return Common.cutCharacter(input, 100)
    },

    showProducts (product) {
      product.imagePath = this.getProductImage(product)
      product.price = this.calculatePrice(product.price)
      product.priceSale = this.calculatePrice(product.priceSale)
      this.product = product
      this.showProduct = true
    },

    showImages (product) {
      product.price = this.calculatePrice(product.price)
      product.priceSale = this.calculatePrice(product.priceSale)
      this.product = product
      this.showImage = true
    }
  },
  created () {
    let category = this.$route.params.category
    this.getCategories()
    this.getProducts(category)
  },
  watch: {
    // call again the method if the route changes
    '$route.params.category': function (category) {
      this.getProducts(category)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
