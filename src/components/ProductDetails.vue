<template>
<div v-if="product" class="container">
  <h1 class="my-4 product-heading">{{product.title}}
    <category-badge :category="product.category.name"></category-badge>
  </h1>
  <div class="row">
    <div class="col-md-8">
      <img ref="mainImg" class="img-fluid img-responsive main-img" :src="getProductImage(product)" alt="">
      <h3 v-if="otherImage.length > 0" class="my-4">Hình ảnh khác</h3>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-3 mb-3" id="relate-img" v-for="(img, index) in otherImage" :key="index">
          <img class="img-fluid" :src="img" alt="" @click="changeImg">
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <social-sharing :url="product.urlShareFB" class="xxx"
        :title="product.title"
        :description="product.description"
        :quote="product.title"
        hashtags="lam trang petstore"
        inline-template>
        <div id="fbShare">
          <network network="facebook">
            <i class="fa fa-facebook"></i> Chia sẻ
          </network>
        </div>
      </social-sharing>
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
      <a class="btnShowMore"v-if="isMoreLength" href="#" @click.prevent="showMore">Xem toàn bộ</a>
    </div>
  </div>
  <!-- /.row -->
  
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
          this.product.urlShareFB = this.$route.fullPath
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
    },

    changeImg (event) {
      let curImg = event.target
      let mainImgSrc = this.$refs.mainImg.src
      this.$refs.mainImg.src = curImg.src
      curImg.src = mainImgSrc
    }
  },

  mounted () {
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
.container {
  padding: 0;
}

#fbShare.xxx {
  display: inline-block;
  cursor: pointer;
  font-size: 1.2em !important;
  font-weight: bold;
  color: #fff;
  background: #4267b2;
  border: 1px solid #4267b2;
  padding: 5px;
  border-radius: 5px;
}

#fbShare.xxx:hover {
  background: #365899;
  border: 1px solid #365899;
}

.product-heading {
  padding: 20px;
}
.product-info {
  padding: 0px 0px 0px 20px;
  font-size: 1.5em;
}

.product-info li {
  line-height: 1.5em;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.view-more {
  display: none;
}

.isShowMore {
  display: inline-block;
}

.btnShowMore {
  display: block;
  text-align: center;
  padding: 10px;
  font-size: 1.5em;
}
</style>
