<template>
  <div>
    <Favorite
      v-for="item in getFavorites"
      :key="item.id"
      :magazine="item"
      hide-favorite="true" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Favorite from '../components/Favorite.vue';

export default {
  components: {
    Favorite,
  },
  computed: {
    ...mapGetters(['getFavorites']),
  },
};
</script>
