<template>
  <modal v-if="showModal" @close="$emit('close')" classError="col-md-5">
    <h3 slot="header">Đã có lỗi xảy ra</h3>
    <p slot="body">
      Hệ thống đang bận.
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

  props: ['showModal']
}
</script>

<style scoped>
p {
  padding: 0px 50px;
}
</style>
