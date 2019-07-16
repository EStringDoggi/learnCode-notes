import Vue from 'vue'
import Vuex from 'vuex'
import types from '../types'

Vue.use(Vuex)
// 定义属性
var state = {
  count: 0
}
// 定义getters
var getters = {
  count (state) {
    return state.count;
  }
}
// 定义actions，要执行的操作，如流程判断、异步请求等
const actions = {
  increment ({
    commit,
    state
  }) {
    commit(types.INCREMENT);
  },
  decrement ({
    commit,
    state
  }) {
    if (state.count > 10) {
      commit(types.DECREMENT);
    }
  }
}
// 根据对应action做数据的改变。数据改变只能在这进行
const mutations = {
    [types.INCREMENT] (state) {// 中括号是ES6的计算属性语法
    state.count++;
  },
    [types.DECREMENT] (state) {
    state.count--;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
