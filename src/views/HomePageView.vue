<template>
  <div>
    <pull-to @top-pull="getRss()">
      <HomePage
        v-for="item in homepages"
        :key="item.id"
        :item="item" />
    </pull-to>
  </div>
</template>

<script>
import axios from 'axios';
import PullTo from 'vue-pull-to';
import HomePage from '../components/HomePage.vue';
import { getHomePages } from '../commons/url';

export default {
  components: {
    HomePage,
    PullTo,
  },
  data() {
    return {
      homepages: [],
    };
  },
  mounted() {
    this.getRss();
  },
  methods: {
    getRss() {
      axios.get(getHomePages)
        .then((result) => {
          this.homepages = [];
          result.data.forEach((el) => {
            console.log(el);
            this.homepages.push(el);
          });
        })
        .catch(() => { });
    },
  },
};
</script>

<style scoped>
</style>
