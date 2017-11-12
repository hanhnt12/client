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
        <div v-if="contact.phone || contact.mobile" class="col-lg-2 col-md-4 text-center">
          <i class="fa fa-phone fa-3x sr-contact"></i>
          <p v-if="contact.phone || contact.mobile">
            {{contact.phone}}
            <br>
            {{contact.mobile}}
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
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
