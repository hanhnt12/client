<template>
  <div v-if="display">
    <button @click="gotoTop()" id="goTop" title="Go to top">
      <i class="fa fa-2x fa-arrow-circle-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',

  props: ['display'],

  methods: {
    gotoTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#goTop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
}

#goTop:hover {
  background-color: #555;
}
</style>
