<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <hr>
    <footer-bar/>
    <loader :loading="loading"></loader>
    <modal-error :showModal="hasError" @close="closeModal"></modal-error>
    <scroll-top :display="displayScroll"></scroll-top>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterBar from '@/components/FooterBar'
import Loader from '@/components/Loader'
import ModalError from '@/components/ModalError'
import ScrollTop from '@/components/ScrollTop'

export default {
  name: 'app',
  components: {
    NavBar,
    FooterBar,
    Loader,
    ScrollTop,
    ModalError
  },

  data: function () {
    return {
      displayScroll: false
    }
  },

  methods: {
    closeModal () {
      this.$store.dispatch('handleError', false)
      this.$store.dispatch('isLoading', false)
    },

    handleScroll: function (event) {
      this.displayScroll = window.scrollY > 20
    }
  },

  computed: {
    loading: function () {
      return this.$store.state.loading
    },
    hasError: function () {
      return this.$store.state.error
    }
  },

  created () {
    this.$store.dispatch('setCategories')
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  mounted () {
  }
}
</script>

<style>

</style>
