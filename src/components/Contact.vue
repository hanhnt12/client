<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-heading">{{contact.title}}</h2>
          <hr class="primary">
          <p>{{contact.caption}}</p>
        </div>
      </div>
      <div class="row">
        <div v-if="contact.name" class="col-lg-2 ml-auto text-center">
          <i class="fa fa-envelope-o fa-4x sr-contact"></i>
          <p>{{contact.name}}</p>
        </div>
        <div v-if="contact.phone || contact.mobile" class="col-lg-2 text-center">
          <i class="fa fa-phone fa-4x sr-contact"></i>
          <p v-if="contact.phone || contact.mobile">
            {{contact.phone}}
            <br>
            {{contact.mobile}}
          </p>
        </div>
        <div v-if="contact.email" class="col-lg-2 mr-auto text-center">
          <i class="fa fa-envelope-o fa-4x sr-contact"></i>
          <p>
            <a :href="{path: 'mailto:' + contact.email}">{{contact.email}}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Services from '@/api/Services'

export default {
  name: 'Contact',
  data () {
    return {
      contact: {}
    }
  },
  methods: {
    async getContactInfo () {
      try {
        this.$store.dispatch('isLoading', true)

        const contact = await Services.getContactInfo()

        // when have error
        if (!contact.data || contact.data.success === false) {
          throw new Error()
        }

        this.contact = contact.data

        this.$store.dispatch('isLoading', false)
      } catch (e) {
        this.$store.dispatch('handleError', true)
      }
    }
  },
  created () {
    this.getContactInfo()
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
