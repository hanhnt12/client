<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-heading">Hãy Liên Lạc!</h2>
          <hr class="primary">
          <p>Sẵn sàng để sở hữu <strong>pets</strong> của bạn? Thật tuyệt! Hãy gọi cho chúng tôi hoặc gửi email cho chúng tôi và chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể!</p>
        </div>
      </div>
      <div class="row">
        <div v-if="contact.phone || contact.mobile" class="col-lg-4 ml-auto text-center">
          <i class="fa fa-phone fa-3x sr-contact"></i>
          <p v-if="contact.phone || contact.mobile">
            {{contact.phone}}
            <br>
            {{contact.mobile}}
          </p>
        </div>
        <div v-if="contact.email" class="col-lg-4 mr-auto text-center">
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
        const contact = await Services.getContactInfo()
        this.contact = contact.data
      } catch (e) {
        this.$store.dispatch('handleError', 'failed')
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
.navbar {
  background: rgba(247, 247, 247, 1);
  opacity: .7;
}
</style>
