<template>
  <b-container class="layout">
    <c-header />
    <main>
      <router-view />
    </main>
  </b-container>
</template>

<script>
import CHeader from "./header";

export default {
  name: "layout",
  components: {
    CHeader
  }
};
</script>

<style scoped>

</style>
