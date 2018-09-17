<template>
  <div>
    <pull-to @top-pull="getRss()">
      <HomePage v-for="item in homepages" :key="item.id" :item="item"/>
    </pull-to>
  </div>
</template>

<script>
import axios from 'axios'
import HomePage from '../components/HomePage.vue'
import PullTo from 'vue-pull-to'

const url = "http://localhost:8081/get-homepages"
export default {
  components: {
    HomePage,
    PullTo
  }, 
  data() {
    return {
      homepages: []
    }
  },
  methods: {
    getRss() {
      axios.get(url)
      .then(result => {
        this.homepages = [];
        result.data.forEach(el => {
          console.log(el)
          this.homepages.push(el);
        });
      })
      .catch(err => {})
    }
  },
  mounted() {
    this.getRss();
  }
}
</script>

<style scoped>

</style>

