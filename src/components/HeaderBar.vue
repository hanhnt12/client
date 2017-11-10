<template>
<header class="intro-header">
  <div class="row">
    <div class="col-lg-12">
      <product-carousel isHeaderBar="true" :products="products" additionClass="img-header"></product-carousel>
    </div>
  </div>
</header>
</template>

<script>
import ProductCarousel from '@/components/ProductCarousel'
import Services from '@/api/Services'

export default {
  name: 'HeaderBar',
  components: {
    ProductCarousel
  },

  data () {
    return {
      products: []
    }
  },
  methods: {
    // get list products
    async getBanner () {
      try {
        this.$store.dispatch('isLoading', true)

        var response = await Services.getBannerInfo()

        // when have error
        if (!response.data || response.data.success === false) {
          throw new Error()
        }

        this.products = response.data

        this.$store.dispatch('isLoading', false)
      } catch (e) {
        this.$store.dispatch('handleError', true)
      }
    }
  },
  created () {
    this.getBanner()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
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
</style>
