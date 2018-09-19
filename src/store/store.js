import Vue from 'vue';
import Vuex from 'vuex';
import { FAVORITE, REGISTER } from './mutation-types';

Vue.use(Vuex);

const KEY_FAVORITE = 'Favorite';
export default new Vuex.Store({
  state: {
    articles: [],
  },

  actions: {
    // クリックした記事を登録する。
    FAVORITE: ({ commit, state }, article) => {
      if (state.articles.find(el => el.id === article.id)) {
        console.log('This article has already been liked.');
        return;
      }
      commit(FAVORITE, article);
    },
    // クリックした記事を削除する。
    DELETE_FAVORITE: ({ commit, state }, id) => {
      commit(REGISTER, state.articles.filter(el => el.id !== id));
    },
  },

  /* eslint-disable no-param-reassign */
  // stateの更新のため、no-param-reassignを無効にする。
  mutations: {
    // 記事を配列に追加する。
    FAVORITE: (state, article) => {
      state.articles.push(article);
      localStorage.setItem(KEY_FAVORITE, JSON.stringify(state.articles));
    },
    // store内の記事を更新する。
    REGISTER: (state, articles) => {
      state.articles = articles;
      localStorage.setItem(KEY_FAVORITE, JSON.stringify(state.articles));
    },
  },
  /* eslint-enable */

  getters: {
    // 登録されている記事を取得する
    getFavorites: (state) => {
      // store内に記事が無い場合、localStorageから取得する。
      // localStorage内にも無ければ、空配列を返す
      if (state.articles.length === 0) {
        return JSON.parse(localStorage.getItem(KEY_FAVORITE)) || [];
      }
      return state.articles;
    },
  },
});
