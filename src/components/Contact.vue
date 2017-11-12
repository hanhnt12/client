<template>
  <section id="contact" v-if="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-heading">{{contact.title}}</h2>
          <hr class="primary">
          <p>{{contact.caption}}</p>
        </div>
      </div>
      <div class="row">
        <div v-if="contact.name" class="col-lg-2 col-md-4 ml-auto text-center">
          <i class="fa fa-address-card-o fa-3x sr-contact"></i>
          <p>{{contact.name}}</p>
        </div>
        <div v-if="contact.phone || contact.mobile" class="col-lg-3 col-md-4 text-center">
          <p v-if="contact.phone || contact.mobile">
            <a v-if="contact.phone" :href="callPhone" class="phone-contact">
              <h4>
                <i class="fa fa-phone fa-1x sr-contact"></i>
                {{contact.phone}}
              </h4>
            </a>
            <a v-if="contact.mobile" :href="callMobile" class="phone-contact">
              <h4>
                <i class="fa fa-mobile fa-1x sr-contact"></i>
                {{contact.mobile}}
              </h4>
            </a>
          </p>
        </div>
        <div v-if="contact.email" class="col-lg-2 col-md-4 mr-auto text-center">
          <i class="fa fa-envelope-o fa-3x sr-contact"></i>
          <p>
            <a :href="{path: 'mailto:' + contact.email}">{{contact.email}}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
    }
  },

  created () {
    if (!this.contact) {
      this.$store.dispatch('setContact')
    }
  },

  computed: {
    contact: function () {
      return this.$store.state.contact
    },

    callPhone: function () {
      return 'tel:' + this.contact.phone
    },

    callMobile: function () {
      return 'tel:' + this.contact.mobile
    }

  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.phone-contact {
  text-decoration: none;
}
.phone-contact h4 {
  font-size: 20px;
  font-weight: bold;
  color: #d0011b;
}
</style>
