<template>
  <div>
    <button
      v-show="isEmpty"
      class="btn bg-danger"
      @click="getRss">再読込</button>
    <div class="pull-to">
      <pull-to
        :top-load-method="getRss"
        :top-config="topConfig" >
        <Magazine
          v-for="item in articles"
          :key="item.id"
          :magazine="item"
        />
      </pull-to>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PullTo from 'vue-pull-to';
import Magazine from '../components/Magazine.vue';
import { getArticles } from '../commons/url';

export default {
  components: {
    Magazine,
    PullTo,
  },
  data() {
    return {
      articles: [],
      loading: false,
    };
  },
  computed: {
    isEmpty() {
      return !this.loading && this.articles.length === 0;
    },
    topConfig() {
      return {
        pullText: '記事を更新', // The text is displayed when you pull down
        triggerText: '指を離して更新', // The text that appears when the trigger distance is pulled down
        loadingText: '読み込み中...', // The text in the load
        doneText: '読み込み完了', // Load the finished text
        failText: '読み込み失敗', // Load failed text
        loadedStayTime: 400, // Time to stay after loading ms
        stayDistance: 50, // Trigger the distance after the refresh
        triggerDistance: 70, // Pull down the trigger to trigger the distance
      };
    },
  },
  mounted() {
    this.getRss();
  },
  methods: {
    getRss(loaded) {
      this.loading = true;
      axios.get(getArticles)
        .then((result) => {
          this.articles = [];
          result.data.forEach((el) => {
            this.articles.push(el);
          });
          this.loading = false;
          loaded('done');
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>

</style>
