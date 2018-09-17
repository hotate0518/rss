<template>
  <div>
    <button class="btn" @click="getRss()" v-show=isEmpty>再読込</button>
    <pull-to @top-pull="getRss()">
      <Magazine  class="top-page" v-for="item in magazins" :key="item.id" :magazine="item"/>
    </pull-to>
  </div>
</template>

<script>
import axios from 'axios'
import Magazine from '../components/Magazine.vue'
import PullTo from 'vue-pull-to'

const url = "http://localhost:8081/get-articles"
export default {
  components: {
    Magazine,
    PullTo
  }, 
  computed: {
    isEmpty() {
      console.log(this.loading || this.magazins.length === 0)
      return !this.loading && this.magazins.length === 0;
    }
  },
  mounted() {
    this.getRss();
  },
  methods: {
    getRss() {
      this.loading = true;
      axios.get(url)
      .then(result => {
        this.magazins = [];
        result.data.forEach(el => {
          console.log(el)
          this.magazins.push(el);
        });
        this.loading = false;
      })
      .catch(err => {
        this.loading = false;
      })
    }
  },
  data() {
    return {
      magazins: [],
      loading: false
    }
  }
}
</script>

<style scoped>

</style>

