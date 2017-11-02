<template>
<div class="row">
    <div class="col-sm-5 col-md-5">
        <form class="navbar-form" id="search-product" role="search" action="" method="GET">
            <div class="input-group">
                <input class="form-control" id="input-search" placeholder="Tìm kiếm sản phẩm." name="q" autocomplete="off">
                <span class="glyphicon glyphicon-remove" id="searchClear"></span>
                <div class="input-group-btn">
                    <button class="btn btn-default" id="btn-search" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
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
