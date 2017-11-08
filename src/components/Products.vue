<template>
<div class="container">
  <div class="row">
    <div class="col-lg-3">
      <h1 class="my-4 section-heading">Danh mục</h1>
      <div class="list-group">
        <router-link v-for="category in categories" 
          :key="category._id"
          :to="{path: '/products/' + category.name}" 
          class="list-group-item"
          :class="{active: calculateActive(category.name)}">{{convertCategory(category.name)}} &gt;&gt;</router-link>
      </div>
    </div>
    <div class="col-lg-9">
      <product-carousel :products="mostViewProduct"></product-carousel>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" 
          v-for="product in products" 
          :key="product._id">
          <div class="card h-100">
            <a href="#"
              @click.prevent="showImages(product)">
                <img class="card-img-top img-responsive img-product" :src="getProductImage(product)" alt="">
            </a>
            <div class="card-body">
              <h4 class="card-title text-center">
                <router-link
                  :to="{path: '/product/' + product._id + '/details'}">{{product.title}}</router-link>
                </a>
              </h4>
            </div>
            <div class="card-footer">
              <h5 class="price">{{calculatePrice(product.price)}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.col-lg-9 -->
  </div>
  <!-- /.row -->
  <product :showProduct="showProduct" :product="product" @close="showProduct = false"/>
  <images :showImage="showImage" :product="product" @close="showImage = false"/>
  <loader :loading="loading"></loader>
</div>
<!-- /.container --> 
</template>

<script>
import Services from '@/api/Services'
import Common from '@/common'
import Product from '@/components/Product'
import Images from '@/components/ImagesSlider'
import Loader from '@/components/Loader'
import ProductCarousel from '@/components/ProductCarousel'

export default {
  name: 'Products',

  data () {
    return {
      products: [],
      categories: [],
      loading: false,
      product: {},
      showProduct: false,
      images: [],
      showImage: false,
      mostViewProduct: [],
      activeLink: ''
    }
  },

  components: {
    Product,
    Images,
    Loader,
    ProductCarousel
  },

  methods: {
    // get list products
    async getProducts (category) {
      try {
        this.loading = true

        var response = await Services.getProducts(category)

        this.products = response.data

        this.loading = false
      } catch (e) {
        this.$emit('error', e)
        console.log(e)
      }
    },

    // get most view product to display carousel
    async getProductsMostView () {
      try {
        this.loading = true

        var response = await Services.getProducts('most_view')

        // create mostview products
        this.mostViewProduct = response.data

        this.loading = false
      } catch (e) {
        this.$emit('error', e)
        console.log(e)
      }
    },

    // load categories on start up
    async getCategories () {
      try {
        this.loading = true
        // call service to get list categories
        const categories = await Services.getCategory()
        this.categories = categories.data

        this.loading = false
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

    convertCategory (category) {
      return Common.convertCategory(category)
    },

    // calculate active link category
    calculateActive (category) {
      return category === this.activeLink
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
    this.activeLink = category
    this.getCategories()
    this.getProducts(category)
    this.getProductsMostView()
  },
  watch: {
    // call again the method if the route changes
    '$route.params.category': function (category) {
      this.activeLink = category
      this.getProducts(category)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-product {
  max-height: 150px;
}

a.active {
  font-weight: bold;
  background-color: #8FD3E8;
  border-color: #8FD3E8;
}
</style>
