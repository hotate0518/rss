import Vue from "vue";
import Vuex from "vuex";
import {FAVORITE, REGISTER} from './mutation-types';

Vue.use(Vuex);
const state = {
  articles:[]
}

const actions = {
  // クリックした記事を登録する。
  FAVORITE: ({commit, state}, article) => {
    if (state.articles.find(el => el.id === article.id)) {
      console.log('This article has already been favorited.');
      return;
    }
    commit(FAVORITE, article)
  },
  // クリックした記事を削除する。
  DELETE_FAVORITE: ({commit, state}, id) => {
    commit(REGISTER, state.articles.filter(el => el.id !== id))
  }
}

const mutations = {
  // 記事を配列に追加する。
  FAVORITE: (state, article) => {
    state.articles.push(article)
    localStorage.setItem('Favorite', JSON.stringify(state.articles))
  },
  // store内の記事を更新する。
  REGISTER: (state, articles) => {
    state.articles = articles
    localStorage.setItem('Favorite', JSON.stringify(state.articles))
  }
}

const getters = {
  // 登録されている記事を取得する
  getFavorites: state => {
    // store内に記事が無い場合、localStorageから取得する。
    // localStorage内にも無ければ、空配列を返す
    if (state.articles.length === 0) {
      state.articles = JSON.parse(localStorage.getItem('Favorite')) || []
    }
    return state.articles
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
