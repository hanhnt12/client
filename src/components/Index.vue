<template>
<div>
  <div class="clear-fix">
  </div>
  <header-bar/>
  <category/>
  <portfolio/>
  <contact/>
  <modal-error/>
</div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import Category from '@/components/Category'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import ModalError from '@/components/ModalError'

export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    HeaderBar,
    Category,
    Portfolio,
    Contact,
    ModalError
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.clear-fix {
    width: 100%;
    height: 70px;
}
</style>
