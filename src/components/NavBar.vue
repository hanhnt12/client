<template>
<div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-faded" id="mainNav">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link 
          class="navbar-brand js-scroll-trigger"
          to="/">Lâm Trang</router-link>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link 
                data-toggle="collapse" 
                data-target=".navbar-collapse.show"
                class="nav-link js-scroll-trigger" 
                to="/products">Sản phẩm</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/#services">Dịch vụ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/#portfolio">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/#contact">Liên hệ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div class="clear-fix">
    </div> -->
</div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#mainNav {
    /* position: absolute; */
    border-bottom: 1px solid #cecece;
    background: #fff;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; 
}

#mainNav .navbar-brand {
    font-weight: 800;
    color: #777777; 
}

#mainNav .navbar-nav > li.nav-item > a {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase; 
}

li.nav-item:hover {
    border-bottom: 3px solid #0085A1;
}

@media only screen and (min-width: 992px) {
    #mainNav {
        border-bottom: 1px solid transparent;
        background: transparent; 
    }
    #mainNav .navbar-brand {
        padding: 15px 20px;
        color: #333; 
    }
    #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {
        color: #0085A1; 
    }
    #mainNav .navbar-nav > li.nav-item > a {
        padding: 15px 20px;
        color: #777; 
    }
    #mainNav .navbar-nav > li.nav-item > a:focus, #mainNav .navbar-nav > li.nav-item > a:hover {
        color: #0085A1; 
    } 
}
@media only screen and (min-width: 1170px) {
  #mainNav {
      -webkit-transition: background-color 0.2s;
      -moz-transition: background-color 0.2s;
      transition: background-color 0.2s;
      /* Force Hardware Acceleration in WebKit */
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      -webkit-backface-visibility: hidden; 
  }
  #mainNav.is-fixed {
      /* when the user scrolls down, we hide the header right above the viewport */
      position: fixed;
      top: -77px;
      -webkit-transition: -webkit-transform 0.2s;
      -moz-transition: -moz-transform 0.2s;
      transition: transform 0.2s;
      border-bottom: 1px solid white;
      background-color: rgba(255, 255, 255, 0.9); 
  }
  #mainNav.is-fixed .navbar-brand {
      color: #333333; 
  }
  #mainNav.is-fixed .navbar-brand:focus, #mainNav.is-fixed .navbar-brand:hover {
      color: #0085A1; 
  }
  #mainNav.is-fixed .navbar-nav > li.nav-item > a {
      color: #333333; 
  }
  #mainNav.is-fixed .navbar-nav > li.nav-item > a:focus, #mainNav.is-fixed .navbar-nav > li.nav-item > a:hover {
      color: #0085A1; 
  }
  #mainNav.is-visible {
      /* if the user changes the scrolling direction, we show the header */
      -webkit-transform: translate3d(0, 100%, 0);
      -moz-transform: translate3d(0, 100%, 0);
      -ms-transform: translate3d(0, 100%, 0);
      -o-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0); } 
  }
</style>
