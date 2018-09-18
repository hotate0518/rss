<template>
  <div class="container magazine">
    <div class="row">
      <span class="title col-lg-10">
        <a
          :href="magazine.mediaUrl"
          target="_blank">{{ magazine.title }}</a>
      </span>
    </div>
    <div class="row">
      <span class="sitename col-lg-12">
        <p>{{ magazine.site }}</p>
      </span>
    </div>
    <div class="row">
      <Favorite
        v-if="!hideFavorite"
        class="col-lg-1"
        label="★"
        @click="FAVORITE(magazine)" />
      <span class="date col-lg-11">
        <p>{{ magazine.date }}</p>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import image from '../assets/logo.png';
import Favorite from './Button.vue';
import { FAVORITE } from '../store/mutation-types';

export default {
  components: {
    Favorite,
  },
  props: {
    magazine: {
      type: Object,
      required: true,
      default: () => {},
    },
    hideFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      thumbnail: image,
    };
  },
  methods: {
    ...mapActions([
      FAVORITE,
    ]),
  },
};
</script>

<style scoped>
.magazine {
  border: 1px solid;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
}
.title {
  text-align: left;
}
.information {
  text-align: right;
}
.sitename {
  font-size: 10px;
  text-align: right;
}
.date {
  font-size: 5px;
  text-align: right;
}
.thumbnail {
  text-align: right;
}
</style>
