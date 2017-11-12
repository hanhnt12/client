<template>
<div v-if="product" class="container">
  <h1 class="my-4">{{product.title}}
    <category-badge :category="product.category.name"></category-badge>
  </h1>
  <div class="row">
    <div class="col-md-8">
      <img class="img-fluid img-responsive main-img" :src="getProductImage(product)" alt="">
    </div>
    <div class="col-md-4">
      <h3 class="cost">
        <s v-if="product.price" class="price">{{calculatePrice(product.price)}}</s>
        <span v-if="product.priceSale" class="price-sale">{{calculatePrice(product.priceSale)}}</span>
      </h3>
      <h3 class="my-3"> Chi tiết</h3>
      <ul class="product-info" v-if="product.freeItems">
        <li v-for="free in product.freeItems" :key="free._id">
          <strong>{{free.title}}:</strong> {{free.value}}
        </li>
      </ul>
    </div>
    <div v-if="product.description" class="col-md-12">
      <h3 class="my-3"> Mô tả sản phẩm</h3>
      <p>{{product.description}}</p>
    </div>
  </div>
  <!-- /.row -->
  <h3 v-if="otherImage" class="my-4">Hình ảnh khác</h3>
  <div class="row">
    <div class="col-md-3 col-sm-6 mb-4" v-for="(img, index) in otherImage" :key="index">
      <img class="img-fluid" :src="img" alt="">
    </div>
  </div>
  <!-- /.row -->
  <contact-floating :display="true"></contact-floating>
</div>
<!-- /.container -->
</template>

<script>
import Services from '@/api/Services'
import Common from '@/common'
import Loader from '@/components/Loader'
import CategoryBadge from '@/components/CategoryBadge'
import ContactFloating from '@/components/ContactFloating'

export default {
  name: 'ProductDetails',
  components: {
    Loader,
    CategoryBadge,
    ContactFloating
  },

  data () {
    return {
      product: null
    }
  },

  methods: {
    // get product details
    async getProduct (productId) {
      try {
        this.$store.dispatch('isLoading', true)

        var response = await Services.getProduct(productId)

        // when have error
        if (!response.data || response.data.success === false) {
          throw new Error()
        }

        this.product = response.data

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
    this.getProduct(productId)
  },

  computed: {
    otherImage: function () {
      return this.getOtherImages(this.product)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-info {
  padding: 0px 0px 0px 20px;
}

.product-info li {
  line-height: 20px;
  letter-spacing: 1px;
}

.main-img {
  max-height: 500px;
}

</style>
