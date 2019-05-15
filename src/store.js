import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import findIndex from "lodash/find";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export default new Vuex.Store({
  state: {
    cartItems: []
  },
  getters: {
    cartItemsCount: state => state.cartItems.length
  },
  mutations: {
    [ADD_TO_CART](state, card) {
      state.cartItems.push(card);
    },
    [REMOVE_FROM_CART](state, card) {
      const cardIndex = findIndex(state.cartItems, card);
      state.cartItems.splice(cardIndex, 1);
    }
  },
  actions: {
    addToCart({ commit }, card) {
      commit(ADD_TO_CART, card);
    },
    removeFromCart({ commit }, card) {
      commit(REMOVE_FROM_CART, card);
    }
  }
});
