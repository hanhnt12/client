<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container col-xs-12" :class="[classError]">

          <div class="modal-header">
            <slot name="header"></slot>
            <button type="button" class="close" @click="$emit('close')">&times;</button>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-warning" @click="$emit('close')"> OK </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',

  props: ['classError']
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    transition: opacity .3s ease;
    display: table !important;
}

.modal-wrapper {
    vertical-align: middle;
}

.modal-container {
    width: 90%;
    margin: 20px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
}

.modal-header {
    padding: 0;
    color: #555;
    text-align: center;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

@media (max-width: 600px) {
    .modal-container {
        width: 100%;
        margin: 50px auto;
        padding: 20px 0px;
        background-color: #fff;
        /* border-radius: 2px; */
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-header {
        padding: 0px 10px;
        color: #555;
        text-align: center;
    }

    .modal-body {
        padding: 0;
    }

    .modal-body img {
        width: 100%;
        height: 100%;
    }
}
</style>
