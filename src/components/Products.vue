<template>
<div class="container">
  <div class="row search-area">
    <div class="col-sm-7 col-md-7"></div>
    <div class="col-sm-5 col-md-5">
      <form id="search-product" 
        role="search" action="" method="POST" class="navbar-form">
        <div class="input-group">
          <input id="input-search" 
            placeholder="Tìm kiếm sản phẩm." 
            name="q" autocomplete="off" 
            class="form-control"
            v-model="keySearch"
            />
          <span id="searchClear" class="glyphicon glyphicon-remove"></span>
          <div class="input-group-btn">
            <button id="btn-search" @click.prevent.self="searchProduct" class="btn btn-default"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-3" v-if="categories && categories.length > 0">
      <h1 class="my-4 section-heading">Danh mục</h1>
      <div class="list-group">
        <router-link v-for="category in categories" 
          :key="category._id"
          :to="{path: '/products/' + category.name}" 
          class="list-group-item menu-item"
          :class="{active: calculateActive(category.name)}">
          <span>{{category.nameMenu}}</span>
        </router-link>
      </div>
    </div>
    <div class="col-lg-9" v-if="mostViewProduct.length > 0 || products.length > 0">

      <product-carousel :products="mostViewProduct"></product-carousel>

      <pagination :totalPage="totalPage" 
        :page="page" 
        @pageChanged="pageChanged">
      </pagination>

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
        <div v-if="products.length < 1" class="col-sm-12 alert alert-warning not-found">
          Không tồn tại sản phẩm nào
        </div>
      </div>

      <pagination :totalPage="totalPage" 
        :page="page" 
        @pageChanged="pageChanged">
      </pagination>

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
import Pagination from '@/components/Pagination'

export default {
  name: 'Products',

  data () {
    return {
      products: [],
      product: {},
      images: [],
      showImage: false,
      mostViewProduct: [],
      activeLink: '',
      keySearch: '',
      page: 1,
      perPage: 6,
      totalPage: 1
    }
  },

  components: {
    Images,
    ProductCarousel,
    Pagination
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

        this.totalPage = parseInt(response.headers['xxx-total-count'])

        this.products = response.data

        this.$store.dispatch('isLoading', false)
      } catch (e) {
        this.$store.dispatch('handleError', true)
      }
    },

    searchProduct () {
      this.getProducts({
        category: this.$route.params.category,
        q: this.keySearch,
        page: this.page,
        perPage: this.perPage
      })
    },

    pageChanged (pageNum) {
      this.page = pageNum
      this.searchProduct()
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

    this.searchProduct()

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
      this.keySearch = ''
      this.getProducts(category)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-area {
  padding: 20px 0px;
}

.not-found {
  padding: 50px;
  font-size: 30px;
}

.price {
  /* font-size: 1vw */
}

.price-sale {
  /* font-size: 1.5vw */
}

.img-product {
  max-height: 150px;
}

.menu-item.active {
  font-weight: bold;
  background-color: #8FD3E8;
  border-color: #8FD3E8;
}

.menu-item {
  position: relative;
  display: inline-block;
  font-weight: bold;
  transition: 0.5s;
}

.menu-item:hover {
  background-color: #8FD3E8;
  opacity: .5;
  border-color: #8FD3E8;
  transition: 0.5s;
  color: #333;
}
</style>
