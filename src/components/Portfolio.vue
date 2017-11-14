<template>
<section class="p-0" id="portfolio">
  <div class="">
    <div class="row no-gutter popup-gallery">
      <div v-for="(portfolio, index) in portfolios" :key="index" class="col-lg-4 col-md-4 col-sm-6 text-center">
        <router-link class="portfolio-box" :to="{path: '/product/' + portfolio._id + '/details'}">
          <img class="img-fluid img-responsive" :src="getPortfolioImage(portfolio)" alt="">
          <div class="portfolio-box-caption">
            <div class="portfolio-box-caption-content">
              <div v-if="portfolio.title" class="project-category text-faded">
                {{portfolio.title}}
              </div>
              <div v-if="portfolio.price" class="project-name">
                {{calculatePrice(portfolio.price)}}
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import Services from '@/api/Services'
import Common from '@/common'

export default {
  name: 'Portfolio',
  data () {
    return {
      loading: false,
      portfolios: []
    }
  },

  methods: {
    // get list products
    async getPortfolio () {
      try {
        this.$store.dispatch('isLoading', true)

        var response = await Services.getPortfolio()

        // when have error
        if (!response.data || response.data.success === false) {
          throw new Error()
        }

        this.portfolios = response.data

        this.$store.dispatch('isLoading', false)
      } catch (e) {
        this.$store.dispatch('handleError', true)
      }
    },

    // get product image
    getPortfolioImage (product) {
      return Common.getProductImage(product)
    },

    // convert product price
    calculatePrice (price) {
      return Common.calculatePrice(price)
    }
  },
  created () {
    this.getPortfolio()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.no-gutter>[class*=col-] {
    padding-right: 0;
    padding-left: 0;
}

.portfolio-box {
    position: relative;
    display: block;
    max-width: 650px;
    margin: 0 auto; 
}

.portfolio-box .portfolio-box-caption {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    opacity: 0;
    color: white;
    background: rgba(240, 95, 64, 0.9);
    background: rgba(107, 158, 174, 0.5);
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    border: 1px solid rgba(107, 158, 174, 0.5);
    border-radius: 5px;
}

.portfolio-box img {
  height: 250px;
}

.portfolio-box .portfolio-box-caption .portfolio-box-caption-content {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    text-align: center; 
}

.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category,
.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {
    padding: 0 15px;
    font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif; 
}

.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase; 
}

.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {
    font-size: 18px; 
}

.portfolio-box:hover .portfolio-box-caption {
    opacity: 1;
    transition: 0.5s; 
}

.portfolio-box:focus {
    outline: none; 
}

@media (min-width: 768px) {
  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {
      font-size: 16px; 
  }
  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {
      font-size: 22px; 
  }
}
</style>
