<template>
<!-- Footer -->
<footer>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <ul class="list-inline text-center">
          <li class="list-inline-item">
            <a href="#">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
        </ul>
        <p class="copyright text-muted">Copyright &copy; 2017</p>
        <p class="text-center footer-logo">
          <router-link to="/">Lâm Trang petstore</router-link>
        </p>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
footer {
    padding: 50px 0 65px;
}

footer .list-inline {
    margin: 0;
    padding: 0;
}

a {
    color: #333;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
}

a:focus, a:hover {
    color: #0085a1;
    text-decoration: none;
}

footer .copyright {
    font-size: 14px;
    margin-bottom: 0;
    text-align: center;
}

p {
    line-height: 1.5;
    margin: 30px 0;
}

.footer-logo {
  font-weight: bold;
}
</style>
