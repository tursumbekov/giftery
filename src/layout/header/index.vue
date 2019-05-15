<template>
  <header class="header">
    <b-row align-h="between" align-v="center">
      <b-col>
        <img src="@/assets/logo.svg" width="100" alt="Logo" class="logo" />
      </b-col>
      <b-col class="text-right">
        {{ cartItemsCount }}
        <b-link :to="{ name: 'cart' }">
          <font-awesome-icon :icon="faShoppingCart" size="lg" class="icon" />
        </b-link>
      </b-col>
    </b-row>
  </header>
</template>

<script>
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { mapGetters } from "vuex";

export default {
  name: "c-header",
  data: () => ({
    faShoppingCart
  }),
  computed: {
    ...mapGetters(["cartItemsCount"])
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 10px 0;
}
.icon {
  color: #d8d8d8;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #f16536;
  }
}
</style>
