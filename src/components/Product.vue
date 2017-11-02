<template>
  <modal v-if="showProduct" @close="$emit('close')">
    <h3 slot="header">
      {{ product.title }}
      <span>
        {{product.category.name}}
      </span>
    </h3>
    <div slot="body">
      <div class="row">
        <div class="col-md-6 product_img">
          <img :src="product.imagePath" class="img-responsive">
        </div>
        <div class="col-md-6 product_content">
          <h4>Product Id:
            <span>{{product._id}}</span>
          </h4>
          <div class="rating">
            <span v-for="star in product.starts" :key="star" class="glyphicon glyphicon-star"></span>
            <span>({{product.views}} reviews)</span>
          </div>
          <p>{{product.description}}</p>
          <h3 class="cost">
            <span class="glyphicon glyphicon-usd"></span> {{product.price}}
            <small class="pre-cost">
              <span class="glyphicon glyphicon-usd"></span> {{product.priceSale}}
            </small>
          </h3>
          <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12" v-if="product.age">
              Age: {{product.age}}
            </div>
            <!-- end col -->
            <div class="col-md-4 col-sm-6 col-xs-12" v-if="product.color">
              Color: {{product.color}}
            </div>
            <!-- end col -->
            <div class="col-md-4 col-sm-12" v-if="product.vaccination">
              Color: {{product.vaccination}}
            </div>
            <!-- end col -->
          </div>
          <div class="space-ten"></div>
          <div class="btn-ground">
            <button type="button" class="btn btn-primary">
              <span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
            <button type="button" class="btn btn-primary">
              <span class="glyphicon glyphicon-heart"></span> Favorite </button>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name: 'ModalError',
  components: {
    Modal
  },

  props: ['showProduct', 'product'],

  data () {
    return {
    }
  },

  methods: {
  },

  created () {
  },

  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product_view .modal-dialog{max-width: 800px; width: 100%;}
.pre-cost{text-decoration: line-through; color: #a5a5a5;}
.space-ten{padding: 10px 0;}
</style>
