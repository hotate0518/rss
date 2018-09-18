<template>
  <div>
    <button class="btn bg-danger" @click="getRss"  v-show=isEmpty>再読込</button>
    <Magazine v-for="item in articles" :key="item.id" :magazine="item"/>
  </div>
</template>

<script>
import axios from 'axios'
import Magazine from '../components/Magazine.vue'

import {getArticles} from '../commons/url'

export default {
  components: {
    Magazine,

  }, 
  mounted() {
    this.getRss();
  },
  data() {
    return {
      articles: [],
      loading: false
    }
  },
  computed: {
    isEmpty() {
      return !this.loading && this.articles.length === 0;
    }
  },
  methods: {
    async getRss() {
      this.loading = true;
      await axios.get(getArticles + '?nocache=' + new Date().getTime())
      .then(result => {
        this.articles = [];
        result.data.forEach(el => {
          this.articles.push(el);
        });       
      })
      .catch(err => {
      })
      this.loading = false;
    }
  }
}
</script>

<style scoped>

</style>

