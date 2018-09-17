<template>
  <div class="top-page container">
    <div class="row">
      <div class="left-area col-lg-2">
        <p>left</p>
      </div>
      <div class="center-area col-lg-8">
        <div class="tab-area">
        <Tab v-for="tab in tabs" v-bind="tab" :key="tab.id" v-model="currentId"/>
        </div>
        <div class="contents-area">
          <MagazineView v-show="isActive(1)" />
          <HomePageView v-show="isActive(2)" />
        </div>
      </div>
      <div class="right-area col-lg-2">
        <p>right</p>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from '../components/Tab.vue'
import MagazineView from './MagazineView.vue'
import HomePageView from './HomePageView.vue'
export default {
  components: {
    Tab,
    MagazineView,
    HomePageView
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
.tab-area {
  text-align: left
}
.left-area,.right-area {
  border: 1px solid
}
</style>


