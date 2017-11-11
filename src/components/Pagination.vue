<template>
<div v-if="totalPage > 1" class="container paging">
  <div class="row">
      <ul class="pagination">
          <li class="page-item" v-if="page > 1">
              <a class="page-link" href="#" @click.prevent="doPaging(1)"> &laquo;</a>
          </li>
          <li class="page-item" v-for="index in totalPage" :key="index" :class="{ active: page == index }">
              <a class="page-link" href="#" @click.prevent="doPaging(index)"> {{ index }}</a>
          </li>
          <li class="page-item" v-if="page < totalPage">
              <a class="page-link" href="#" @click.prevent="doPaging(lastPage)"> &raquo;</a>
          </li>
      </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Pagination',

  props: ['page', 'totalPage'],

  data: function () {
    return {
      visiblePages: 5
    }
  },

  methods: {
    doPaging (pageNum) {
      this.$emit('pageChanged', pageNum)
    }
  },

  computed: {
    paginationRange: function () {
      let start = this.page - this.visiblePages / 2 <= 0
        ? 1 : this.page + this.visiblePages / 2 > this.lastPage
        ? this.totalPage - this.visiblePages + 1
        : Math.ceil(this.page - this.visiblePages / 2)

      let range = []

      for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
        range.push(start + i)
      }
    },

    lastPage: function () {
      return Math.floor(this.totalPage)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.paging {
    padding: 20px;
}
</style>
