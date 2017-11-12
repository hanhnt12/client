<template>
<div class="" v-if="productSlide.length > 0">
  <div id="carouselProduct" class="carousel slide my-4" data-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="(product, index) in productSlide" 
        :key="product._id" 
        data-target="#carouselProduct" 
        :data-slide-to="index" 
        :class="{active: index === 0}"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item" 
        v-for="(product, index) in productSlide" 
        :key="product._id" :class="{active: index === 0}">
        <router-link :to="{path: '/product/' + product._id + '/details'}">
          <img class="d-block img-fluid" :class="newClass" :src="product.image">
          <div class="carousel-caption d-md-block">
            <h4>{{product.title}}</h4>
            <!-- <p>
              <s v-if="product.price" class="price">{{calculatePrice(product.price)}}</s> 
              <span v-if="product.priceSale" class="price-sale">{{calculatePrice(product.priceSale)}}</span>
            </p>
            <div>
              <router-link class="btn btn-theme btn-sm btn-min-block"
                :to="{path: '/product/' + product._id + '/details'}">Chi tiết</router-link>
            </div> -->
          </div>
        </router-link>
      </div>
    </div>
    <!-- <a class="carousel-control-prev" href="#carouselProduct" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselProduct" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a> -->
  </div>
</div>
<!-- /.container --> 
</template>

<script>
import Common from '@/common'

export default {
  name: 'ProductCarousel',

  data () {
    return {
    }
  },

  props: ['products', 'additionClass', 'isHeaderBar'],

  components: {
  },

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
  created () {
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
.carousel-inner .img-default {
    width: 100%;
    height: 230px;
}

.carousel-inner .img-header {
    width: 100%;
    max-height: 700px;
    min-height: 200px;
}

.ccarousel-control-prev,
.carousel-control-next {
	opacity: 1;
	filter: alpha(opacity=100);
	background-image: none;
  background-repeat: no-repeat;
  color: #333;
	text-shadow: none;
}

.carousel-caption {
    position: absolute;
    top: 30%;
    left: 1.8%;
    right: auto;
    width: 96.66666666666666%;
    color: #f8f8f8;
}

.carousel-caption h4 {
    font: normal normal normal 70px/1.4em 'chelsea market',fantasy;
    /* font-size: 3.5vw; */
    font-size: 30px;
    color: #486A74;
}

.btn-min-block {
    min-width: 170px;
    line-height: 26px;
}

.btn-theme {
    color: #333;
    background-color: transparent;
    border: 2px solid #fff;
    margin-right: 15px;
}

.btn-theme:hover {
    color: #333;
    background-color: #fff;
    border-color: #fff;
}
</style>
