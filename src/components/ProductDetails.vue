<template>
<div v-if="product" class="container">
  <h1 class="my-4 product-heading">{{product.title}}
    <category-badge :category="product.category.name"></category-badge>
  </h1>
  <div class="row">
    <div class="col-md-8">
      <img class="img-fluid img-responsive main-img" :src="getProductImage(product)" alt="">
    </div>
    <div class="col-md-4">
      <div class="fb-like"
        :data-href="product.urlShareFB"
        data-layout="button_count" 
        data-action="like"
        data-size="large"
        data-show-faces="true"
        data-share="true">
      </div>
      <h3 class="cost">
        <s v-if="product.price" class="price">{{calculatePrice(product.price)}}</s>
        <span v-if="product.priceSale" class="price-sale">{{calculatePrice(product.priceSale)}}</span>
      </h3>
      <h3 class="my-3" v-if="product.freeItems.length > 0"> Chi tiết</h3>
      <ul class="product-info" v-if="product.freeItems.length > 0">
        <li v-for="free in product.freeItems" :key="free._id">
          <strong>{{free.title}}:</strong> {{free.value}}
        </li>
      </ul>
    </div>
    <div v-if="product.description" class="col-md-12">
      <h3 class="my-3"> Mô tả sản phẩm</h3>
      <p :class="isMoreLength">{{product.description}}</p>
      <a v-if="isMoreLength" href="#" @click.prevent="showMore">Xem toàn bộ</a>
    </div>
  </div>
  <!-- /.row -->
  <h3 v-if="otherImage.length > 0" class="my-4">Hình ảnh khác</h3>
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
      product: null,
      isMoreLength: ''
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
        if (this.product) {
          this.product.urlShareFB = 'product/' + this.product._id + '/details'
          Common.createFBSEO(document, this.product)

          if (this.product.description.length > 200) {
            this.isMoreLength = 'isMoreLength'
          }

          this.$store.dispatch('isLoading', false)
        }
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
    },

    showMore () {
      this.isMoreLength = ''
    }
  },

  created () {
    let productId = this.$route.params.productId
    this.getProduct(productId)
    var js
    var fjs = document.getElementsByTagName('script')[0]
    if (document.getElementById('facebook-jssdk')) {
      return
    }
    js = document.createElement('script')
    js.id = 'facebook-jssdk'
    js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.11'
    fjs.parentNode.insertBefore(js, fjs)
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
.product-heading {
  padding: 20px;
}
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

.isMoreLength {
  /* -o-text-overflow: ellipsis;   Opera */
  /* text-overflow: ellipsis;   IE, Safari (WebKit) */
  /* overflow: hidden;              don't show excess chars */
  /* white-space: nowrap;          force single line */
  /* width: 100%;  */
  margin: 0;
  height: 100px;
  overflow: hidden;
}

.view-more {
  display: none;
}

.isShowMore {
  display: inline-block;
}

</style>
