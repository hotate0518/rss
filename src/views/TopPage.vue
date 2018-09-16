<template>
  <div class="top-page">
    <div class="tab-area">
     <Tab v-for="tab in tabs" v-bind="tab" :key="tab.id" v-model="currentId"/>
    </div>
    <div class="contents-area">
      <MagazineView v-show="isActive(1)" />
    </div>
  </div>
</template>

<script>
import Tab from '../components/Tab.vue'
import MagazineView from './MagazineView.vue'
export default {
  components: {
    Tab,
    MagazineView
  },
  data() {
    return {
      currentId: 1,
      tabs: [{
        id: 1,
        label: '本日の記事',
        contents: "MagazineView"
      },{
        id: 2,
        label: 'サイト一覧',
        contents: "サイト一覧"
      }]
    }
  },
  methods: {
    isActive(id) {
      return id === this.currentId;
    }
  }
}
</script>

<style scoped>
</style>


