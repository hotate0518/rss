<template>
  <div>
    <Favorite  v-for="item in getFavorites" :key="item.id" :magazine="item" hideFavorite="true"/>
  </div>
</template>

<script>
import Favorite from '../components/Favorite.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Favorite
  }, 
  computed: {
    ...mapGetters(['getFavorites'])
  }
}
</script>
