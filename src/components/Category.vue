<template>
<section id="services">
  <div class="">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading">{{ categoryHome }}</h2>
        <hr class="primary">
      </div>
    </div>
  </div>
  <div class="container" v-if="categories && categories.length > 0">
    <div class="row">
      <div v-for="category in categories" 
        :key="category._id" 
        class="col-lg-4 col-md-4 text-center">
        <div class="service-box">
          <!-- <i class="fa fa-4x fa-diamond text-primary sr-icons"></i> -->
          <img class="img-circle img-responsive" 
            :src="'http://localhost:3000/images/' + category.imagePath"
            :alt="category.imagePath"/>
          <h3>{{category.title}}</h3>
          <p class="text-muted description">{{cutCharacter(category.description)}}</p>
          <router-link 
            :to="{path: 'products/' + category.name}" 
            class="category-details">Chi tiết &gt;&gt;</router-link>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Common from '@/common'

export default {
  name: 'Category',
  data () {
    return {
    }
  },

  methods: {
    cutCharacter (input) {
      return Common.cutCharacter(input, 200)
    }
  },

  created () {
    if (!this.categories) {
      this.$store.dispatch('setCategories')
    }
  },

  computed: {
    categories: function () {
      return this.$store.state.categories
    },

    categoryHome: function () {
      let categoryHome = this.$store.state.contact && this.$store.state.contact.categoryHome
      if (categoryHome) {
        return categoryHome
      }
      return 'Dịch vụ của chúng tôi'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
a.category-details {
  text-decoration: none;
  background-color: rgba(143, 211, 232, 1);
  border: solid rgba(102, 101, 101, 1) 0px;
  cursor: pointer !important;
  padding: 10px 20px;
  color: #FFFFFF;
  position: absolute;
  bottom: 5px;
  right: 35%;
}

a.category-details:hover {
  background-color: rgba(107, 158, 174, 1);
  border-color: rgba(247, 247, 247, 1);
}

.description {
  text-align: justify;
}

@media (max-width: 600px) {
  .service-box {
      padding: 0px 20px;
  }
}

/* @media (min-width: 992px) { */
  .service-box {
      margin: 20px auto 0;
  }

  .text-primary {
      color: #8FD3E8 !important;
  }

  .service-box {
      max-width: 400px;
      margin: 50px auto 0;
      overflow: hidden;
      padding-bottom: 50px;
  }

  .service-box img {
    width: 70px;
    height: 70px;
  }

  .service-box h3 {
      font: normal normal normal 22px/1.4em 'chelsea market',fantasy;
      color: #8FD3E8;
      text-transform: lowercase;
  }
  .service-box p {
      font: normal normal normal 15px/1.4em proxima-n-w01-reg,sans-serif;
      color: #666565;
      text-transform: lowercase;
  }
/* } */
</style>
