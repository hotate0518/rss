<template>
  <div class="container homepage">
    <div class="row">
      <span class="title col-lg-10">
        <a :href=item.homepage target="_blank">{{item.title}}</a>
      </span>
    </div>
    <div class="row">
      <Favorite class="col-lg-1" label="★" />
    </div>
  </div>
</template>

<script>
import image from '../assets/logo.png'
import Favorite from './Button.vue'
export default {
  components: {
    Favorite
  },
  props: {
    item: {}
  },
  data () {
    return {
      thumbnail: image
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.homepage {
  border: 1px solid;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
}
.title {
  font-size: 25px;
  text-align: left
}
</style>
