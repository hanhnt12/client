<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <hr>
    <footer-bar/>
    <loader :loading="loading"></loader>
    <modal-error :showModal="hasError" @close="closeModal"></modal-error>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterBar from '@/components/FooterBar'
import Loader from '@/components/Loader'
import ModalError from '@/components/ModalError'

export default {
  name: 'app',
  components: {
    NavBar,
    FooterBar,
    Loader,
    ModalError
  },

  data: function () {
    return {
    }
  },

  methods: {
    closeModal () {
      this.$store.dispatch('handleError', false)
      this.$store.dispatch('isLoading', false)
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
  },

  mounted () {
  }
}
</script>

<style>

</style>
