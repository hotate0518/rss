<template>
  <div>
    <button class="btn bg-danger" @click="getRss()" v-show=isEmpty>再読込</button>
    <pull-to @top-pull="getRss()">
      <Magazine v-for="item in articles" :key="item.id" :magazine="item"/>
    </pull-to>
  </div>
</template>

<script>
import axios from 'axios'
import Magazine from '../components/Magazine.vue'
import PullTo from 'vue-pull-to'
import {getArticles} from '../commons/url'

export default {
  components: {
    Magazine,
    PullTo
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

