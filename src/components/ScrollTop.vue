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
      // document.body.scrollTop = 0
      // document.documentElement.scrollTop = 0
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
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
  background: #333;
  color: #fff;
  cursor: pointer;
  font-size: 1.5em;
  padding: 10px;
  border-radius: 5px;
  opacity: .5;
}

#goTop:hover {
  background-color: #555;
  opacity: .8;
}
</style>
