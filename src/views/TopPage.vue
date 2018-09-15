<template>
<div>
    <Magazine title="title" sentence="sentence"/>
    <button class="load" @click="getRss()">ロード</button>
</div>
</template>

<script>
import axios from 'axios'
import Magazine from '../components/Magazine.vue'
import RssList from '../rss/rss.json'
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

export default {
  components: {
    Magazine
  }, 
  methods: {
    getRss() {
      console.log(RssList)
      RssList.forEach(el => {
        axios.get(el.url)
        .then(json => {})
        .catch(err => {})
      });

    }
  }
}
</script>

