<template>
  <span :class="badgeClass">{{categoryLabel(category)}}</span>
</template>

<script>
export default {
  name: 'CategoryBadge',
  data () {
    return {
    }
  },

  props: ['category'],

  methods: {
    categoryLabel (category) {
      let categories = this.$store.state.categories

      for (let i = 0; i < categories.length; i++) {
        if (category === categories[i].name) {
          return categories[i].nameMenu
        }
      }

      return 'pets'
    }
  },

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
