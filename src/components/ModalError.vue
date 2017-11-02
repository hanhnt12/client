<template>
  <modal v-if="showModal" @close="showModal = false" classError="col-md-5">
    <h3 slot="header">Đã có lỗi xảy ra</h3>
    <p slot="body">
      Chúng tôi rất đông đúc.
      <br />
      Vui lòng quay lại sau.
    </p>
  </modal>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name: 'ModalError',
  components: {
    Modal
  },

  data () {
    return {
      showModal: false
    }
  },

  created () {
    console.log('status: ' + this.$store.status)
    if (this.$store.status === 'failed') {
      this.showModal = true
    }
  }
}
</script>

<style scoped>
.modal-container {
  max-width: 500px;
}
</style>
