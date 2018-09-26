<template>
  <div class="top-page container">
    <div class="row">
      <div class="left-area col-lg-2"/>
      <div class="center-area col-lg-8">
        <div class="tab-area">
          <Tab
            v-for="tab in tabs"
            v-bind="tab"
            :key="tab.id"
            v-model="currentId" />
        </div>
        <div class="contents-area">
          <MagazineView v-show="isActive(1)" />
          <HomePageView v-show="isActive(2)" />
          <FavoriteView v-show="isActive(3)" />
        </div>
      </div>
      <div class="right-area col-lg-2"/>
    </div>
  </div>
</template>

<script>
import Tab from '../components/Tab.vue';
import MagazineView from './MagazineView.vue';
import HomePageView from './HomePageView.vue';
import FavoriteView from './FavoriteView.vue';

export default {
  components: {
    Tab,
    MagazineView,
    HomePageView,
    FavoriteView,
  },
  data() {
    return {
      currentId: 1,
      tabs: [{
        id: 1,
        label: '本日の記事',
      },
      {
        id: 2,
        label: 'サイト一覧',
      },
      {
        id: 3,
        label: 'お気に入り',
      },
      ],
    };
  },
  methods: {
    isActive(id) {
      return id === this.currentId;
    },
  },
};
</script>

<style scoped>
.tab-area {
  text-align: left;
}
.contents-area {
  height: 75vh;
  border: 1px solid;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.left-area,
.right-area {
  border: 0px solid;
}
</style>
