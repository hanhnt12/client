<template>
<div>
  <header-bar/>
  <category/>
  <portfolio/>
  <contact/>
</div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import Category from '@/components/Category'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

export default {
  name: 'Index',

  components: {
    HeaderBar,
    Category,
    Portfolio,
    Contact
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
