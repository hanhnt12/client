<template>
  <span :class="badgeClass">{{categoryLabel}}</span>
</template>

<script>
import Common from '@/common'
export default {
  name: 'CategoryBadge',
  data () {
    return {
    }
  },
  props: ['category'],
  computed: {
    badgeClass: function () {
      let returnClass = 'badge badge-pill badge-'
      switch (this.category) {
        case 'pets':
          returnClass += 'primary'
          break
        case 'accessory':
          returnClass += 'success'
          break
        case 'service':
          returnClass += 'info'
          break
        default:
          returnClass += 'default'
          break
      }

      return returnClass
    },
    categoryLabel: function () {
      return Common.convertCategory(this.category)
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
span {
  font-size: 15px;
}
</style>
