<template>
  <div class="magazine">
    <h2>{{title}}</h2>
    <h3>{{sentence}}</h3>
    <img :src="thumbnail" />
  </div>
</template>

<script>
import image from '../assets/logo.png'

export default {
  props: {
    title : {

    },
    sentence: {

    }
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
