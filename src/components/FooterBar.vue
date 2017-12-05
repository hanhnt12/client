<template>
<!-- Footer -->
<footer>
  <div class="">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto text-center">
        <a :href="facebookLink" target="_blank" class="fbLink">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
          </span>
          Lâm Trang petstore
        </a>
        <p class="copyright text-muted">Copyright &copy; 2017</p>
        <!-- <p class="text-center footer-logo">
          <router-link to="/">Lâm Trang petstore</router-link>
        </p> -->
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
  },

  computed: {
    facebookLink: function () {
      let contact = this.$store.state.contact
      if (contact) {
        return this.$store.state.contact.facebookLink
      } else {
        return 'https://facebook.com'
      }
    }
  },

  created () {
    if (!this.contact) {
      this.$store.dispatch('setContact')
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
footer {
    padding: 50px 0 65px;
}

a {
    color: #3b5998;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
}

a:focus, a:hover {
    color: #29487d;
    text-decoration: none;
}

footer .copyright {
    font-size: 14px;
}

p {
    line-height: 1.5;
    margin: 30px 0;
}

.fbLink {
  font-size: 1.5em;
}
</style>
