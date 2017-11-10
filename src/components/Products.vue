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
          :class="{active: calculateActive(category.name)}">{{category.nameMenu}} &gt;&gt;</router-link>
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
              <s v-if="product.price" class="price">{{calculatePrice(product.price)}}</s>
              <span v-if="product.priceSale" class="price-sale">{{calculatePrice(product.priceSale)}}</span>
              <span v-else class="price-sale">Liên hệ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.col-lg-9 -->
  </div>
  <!-- /.row -->
  <images :showImage="showImage" :product="product" @close="showImage = false"/>
</div>
<!-- /.container --> 
</template>

<script>
import Services from '@/api/Services'
import Common from '@/common'
import Images from '@/components/ImagesSlider'
import ProductCarousel from '@/components/ProductCarousel'

export default {
  name: 'Products',

  data () {
    return {
      products: [],
      product: {},
      images: [],
      showImage: false,
      mostViewProduct: [],
      activeLink: ''
    }
  },

  components: {
    Images,
    ProductCarousel
  },

  methods: {
    // get list products
    async getProducts (category) {
      try {
        this.$store.dispatch('isLoading', true)

        var response = await Services.getProducts(category)

        // when have error
        if (!response.data || response.data.success === false) {
          throw new Error()
        }

        this.products = response.data

        this.$store.dispatch('isLoading', false)
      } catch (e) {
        this.$store.dispatch('handleError', true)
      }
    },

    // get most view product to display carousel
    async getProductsMostView () {
      try {
        this.$store.dispatch('isLoading', true)

        var response = await Services.getProducts('most_view')

        // when have error
        if (!response.data || response.data.success === false) {
          throw new Error()
        }

        // create mostview products
        this.mostViewProduct = response.data

        this.$store.dispatch('isLoading', false)
      } catch (e) {
        this.$store.dispatch('handleError', true)
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

    // calculate active link category
    calculateActive (category) {
      return category === this.activeLink
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

    this.getProducts(category)

    this.getProductsMostView()
  },

  computed: {
    categories: function () {
      return this.$store.state.categories
    }
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
.price {
  font-size: 1vw
}

.price-sale {
  font-size: 1.5vw
}

.img-product {
  max-height: 150px;
}

a.active {
  font-weight: bold;
  background-color: #8FD3E8;
  border-color: #8FD3E8;
}
</style>
