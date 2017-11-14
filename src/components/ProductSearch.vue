<template>
<div id="search-product form-control" class="navbar-form">
    <div class="input-group">
        <input id="input-search" 
        placeholder="Tìm kiếm sản phẩm." 
        name="q" autocomplete="off" 
        class="form-control"
        v-model="keySearch"
        @keyup.enter.prevent="searchProduct" 
        />
        <span id="searchClear" class="glyphicon glyphicon-remove"></span>
        <div class="input-group-btn">
        <button id="btn-search" 
            @click.prevent="searchProduct" 
            class="btn btn-default"><i class="fa fa-search"></i></button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ProductSearch',
  data () {
    return {
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background: rgba(247, 247, 247, 1);
  opacity: .7;
}
</style>
