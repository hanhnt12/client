<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <hr>
    <footer-bar/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'app',
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style>

</style>
