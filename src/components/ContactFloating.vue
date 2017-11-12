<template>
  <div v-if="display">
    <a v-if="callPhone"
      :href="callPhone"
      class="btn btn-warning contact-float rounded-circle" 
      data-toggle="tooltip"
      title="Liên hệ đặt hàng">
      <i class="fa fa-phone fa-2x sr-contact"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ContactFloating',

  props: ['display'],

  computed: {
    callPhone: function () {
      if (this.$store.state && this.$store.state.contact) {
        return 'tel:' + this.$store.state.contact.mobile
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.contact-float {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 100;
  cursor: pointer;
  opacity: .2;
}

.contact-float:hover {
  font-size: 20px;
  font-weight: bold;
  color: #d0011b;
  opacity: 1;
  transition: 0.5s;
}
</style>
