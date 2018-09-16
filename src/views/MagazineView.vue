<template>
  <div>
    <pull-to @top-pull="getRss()">
      <Magazine  class="top-page" v-for="item in magazins" :key="item.id" :magazine="item"/>
    </pull-to>
  </div>
</template>

<script>
import axios from 'axios'
import Magazine from '../components/Magazine.vue'
import PullTo from 'vue-pull-to'

const url = "http://localhost:8081"
export default {
  components: {
    Magazine,
    PullTo
  }, 
  data() {
    return {
      magazins: []
    }
  },
  methods: {
    getRss() {
      axios.get(url)
      .then(result => {
        this.magazins = [];
        result.data.forEach(el => {
          console.log(el)
          this.magazins.push(el);
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

