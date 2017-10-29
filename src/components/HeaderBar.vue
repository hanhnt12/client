<template>
<header class="intro-header">
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="static/img/cal_1.jpg" alt="First slide">
          <div class="carousel-caption d-none d-md-block">
            <h3>Chó đen</h3>
            <p>1.800.000</p>
            <div>
              <a class="btn btn-theme btn-sm btn-min-block" href="#">Chi tiết</a>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="static/img/cal_2.jpg" alt="Second slide">
          <div class="carousel-caption d-none d-md-block">
            <h3>Mèo đen</h3>
            <p>800.000</p>
            <div>
              <a class="btn btn-theme btn-sm btn-min-block" href="#">Chi tiết</a>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="static/img/cal_3.jpg" alt="Third slide">
          <div class="carousel-caption d-none d-md-block">
            <h3>Chó trắng</h3>
            <p>700.000</p>
            <div>
              <a class="btn btn-theme btn-sm btn-min-block" href="#">Chi tiết</a>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'HeaderBar',
  data () {
    return {}
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.carousel-inner img {
    width: 100%;
    max-height: 600px;
}

.ccarousel-control-prev,
.carousel-control-next {
	opacity: 1;
	filter: alpha(opacity=100);
	background-image: none;
  background-repeat: no-repeat;
  color: #333;
	text-shadow: none;
}

.carousel-caption {
    position: absolute;
    top: 20%;
    left: 1.8%;
    right: auto;
    width: 96.66666666666666%;
    color: #f8f8f8;
}

.carousel-caption h3 {
    font: normal normal normal 70px/1.4em 'chelsea market',fantasy;
    color: #486A74;
}

.btn-min-block {
    min-width: 170px;
    line-height: 26px;
}

.btn-theme {
    color: #333;
    background-color: transparent;
    border: 2px solid #fff;
    margin-right: 15px;
}

.btn-theme:hover {
    color: #333;
    background-color: #fff;
    border-color: #fff;
}
</style>
