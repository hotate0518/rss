<template>
  <header class="header bg-info text-white">
    <img
      :src="image"
      @click="Submit()" >
  </header>
</template>

<script>
import Hotate from '../assets/hotate.png';

export default {
  data() {
    return {
      image: Hotate,
    };
  },
  methods: {
    Submit() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.header {
  margin: 3px;
}
</style>
