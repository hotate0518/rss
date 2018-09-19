<template>
  <div>
    <p v-show="loading">Now loading...</p>
    <button
      v-show="isEmpty"
      class="btn bg-danger"
      @click="getRss">再読込</button>
    <Magazine
      v-for="item in articles"
      :key="item.id"
      :magazine="item" />
  </div>
</template>

<script>
import axios from 'axios';
import Magazine from '../components/Magazine.vue';

import { getArticles } from '../commons/url';

export default {
  components: {
    Magazine,
  },
  data() {
    return {
      articles: [],
      loading: false,
    };
  },
  computed: {
    isEmpty() {
      return !this.loading && this.articles.length === 0;
    },
  },
  mounted() {
    this.getRss();
  },
  methods: {
    getRss() {
      this.loading = true;
      axios.get(getArticles)
        .then((result) => {
          this.articles = [];
          result.data.forEach((el) => {
            this.articles.push(el);
          });
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
</style>
