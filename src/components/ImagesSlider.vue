<template>
<modal v-if="showImage" @close="$emit('close')">
  <h3 slot="header">{{product.title}}</h3>
  <section slot="body" class="p-0" id="portfolio">
    <div class="container-fluid">
      <div id="carouselImage" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li v-for="(image, index) in product.image" :key="image._id" 
            data-target="#carouselImage" 
            :data-slide-to="index" 
            :class="{active: index === 0}"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div v-for="(image, index) in product.image" 
            :key="image._id" class="carousel-item text-center" 
            :class="{active: index === 0}">
            <img class="d-block img-fluid img-responsive" :src="image.pathImage" :alt="productName">
            <div class="carousel-caption d-none d-md-block">
              <p class="price">
                  <s v-if="product.priceSale && !isNaN(product.priceSale)" class="price-sale">{{product.priceSale}}</s> 
                  <span v-if="product.price">{{product.price}}</span>
              </p>
              <div>
                <router-link class="btn btn-theme btn-sm btn-min-block btn-details"
                  :to="{path: '/product/' + product._id + '/details'}">Chi tiết</router-link>
              </div>
            </div>
          </div>
        </div>
        <a v-if="product.image.length > 1" class="carousel-control-prev" href="#carouselImage" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a v-if="product.image.length > 1" class="carousel-control-next" href="#carouselImage" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
</modal>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  name: 'ImagesSlider',
  components: {
    Modal
  },

  props: ['showImage', 'product'],

  data () {
    return {
    }
  },

  methods: {},

  computed: {},
  created () {
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.price {
  font-weight: bold;
  font-size: 50px;
  color: #9D0D0D;
}

.price-sale {
font-weight: bold;
font-size: 30px;
color: #000;
}

.carousel-inner img {
    width: 100%;
    max-height: 500px;
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
    top: 20%;
    left: 1.8%;
    right: auto;
    width: 96.66666666666666%;
    color: #f8f8f8;
}

.carousel-caption h3 {
    font: normal normal normal 70px/1.4em 'chelsea market',fantasy;
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

.btn-details {
  font-weight: bold;
  line-height: 2em;
}
</style>
