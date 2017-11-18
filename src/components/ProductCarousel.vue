<template>
<carousel-3d v-if="productSlide.length > 0"
  :autoplay="true"
  :autoplay-timeout='2500' 
  :disable3d="false"
  :width="900"
  :height="500"
  class="carousel">
  <slide v-for="(product, index) in productSlide" 
    :key="product._id" :index="index">
    <router-link class="d-block" :to="{path: '/product/' + product._id + '/details'}">
      <img class="d-block img-fluid" :class="newClass" :src="product.image">
    </router-link>
  </slide>
  </slide>
</carousel-3d>
<!-- /.container --> 
</template>

<script>
import Common from '@/common'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'ProductCarousel',

  components: {
    Carousel3d,
    Slide
  },

  data () {
    return {
    }
  },

  props: ['products', 'additionClass', 'isHeaderBar'],

  methods: {
    // get most view product to display carousel
    createProduct () {
      let productConverted = []

      // create product for display in slide
      for (let i = 0; i < this.products.length; i++) {
        let product = this.products[i]

        productConverted.push({
          _id: product._id,
          image: this.getProductImage(product, this.isHeaderBar),
          // image: '/static/img/900X500_' + i + '.png',
          title: product.title || '',
          price: product.price,
          priceSale: product.priceSale
        })
      }

      return productConverted
    },

    // get product image
    getProductImage (product, isHeaderBar) {
      return Common.getProductImage(product, isHeaderBar)
    },

    // convert product price
    calculatePrice (price) {
      return Common.calculatePrice(price)
    },

    // cut characters
    cutCharacter (input) {
      return Common.cutCharacter(input, 100)
    }
  },
  ready () {
  },
  computed: {
    productSlide: function () {
      return this.createProduct()
    },

    newClass: function () {
      if (this.additionClass) {
        return this.additionClass
      }
      return 'img-default'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
} 
.carousel-3d-slide {
  height: auto !important;
  border: none;
  background-color: rgba(0, 0, 0, 0.25) !important;
}

.carousel-3d-slide a {
  height: auto !important;
}

.carousel-3d-slide img {
  width: 100%;
}
</style>
