<template>
<modal v-if="showImage" @close="$emit('close')">
  <div slot="header">{{productName}}</div>
  <section slot="body" class="p-0" id="portfolio">
    <div class="container-fluid">
      <div class="row no-gutter popup-gallery">
        <div v-for="image in images" :key="image._id" class="col-lg-4 col-sm-6">
          <a class="portfolio-box" :href="image.pathImage">
            <img class="img-fluid" :src="image.pathImage" alt="">
            <div class="portfolio-box-caption">
              <div class="portfolio-box-caption-content">
                <div class="project-category text-faded">
                  Category
                </div>
                <div class="project-name">
                  Project Name
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</modal>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  name: 'Images',
  components: {
    Modal
  },

  props: ['showImage', 'images', 'productName'],

  data () {
    return {}
  },

  methods: {},

  computed: {},
  created () {
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.portfolio-box {
  position: relative;
  display: block;
  max-width: 650px;
  margin: 0 auto;
}
.portfolio-box .portfolio-box-caption {
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  opacity: 0;
  color: white;
  background: rgba(240, 95, 64, 0.9);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
}
.portfolio-box .portfolio-box-caption .portfolio-box-caption-content {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
}
.portfolio-box
  .portfolio-box-caption
  .portfolio-box-caption-content
  .project-category,
.portfolio-box
  .portfolio-box-caption
  .portfolio-box-caption-content
  .project-name {
  padding: 0 15px;
  font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;
}
.portfolio-box
  .portfolio-box-caption
  .portfolio-box-caption-content
  .project-category {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
.portfolio-box
  .portfolio-box-caption
  .portfolio-box-caption-content
  .project-name {
  font-size: 18px;
}
.portfolio-box:hover .portfolio-box-caption {
  opacity: 1;
}
.portfolio-box:focus {
  outline: none;
}
@media (min-width: 768px) {
  .portfolio-box
    .portfolio-box-caption
    .portfolio-box-caption-content
    .project-category {
    font-size: 16px;
  }
  .portfolio-box
    .portfolio-box-caption
    .portfolio-box-caption-content
    .project-name {
    font-size: 22px;
  }
}
</style>
