import Vue from "vue";
import Router from "vue-router";
import GiftCards from "./views/GiftCards.vue";

const Cart = () => import(/* webpackChunkName: "cart" */ "./views/Cart.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: {
        name: "gift-cards"
      }
    },
    {
      path: "/giftcards",
      name: "gift-cards",
      component: GiftCards
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    }
  ]
});
