<template>
  <div>
    <b-row v-if="brands.length">
      <b-col v-for="brand in brands" :key="brand.id" cols="12" sm="6" lg="4">
        <Brand :brand="brand" />
      </b-col>
    </b-row>
    <b-alert v-else show variant="primary">
      В этой категории пусто
    </b-alert>
  </div>
</template>

<script>
import Brand from "@/components/Brand";

export default {
  name: "BrandsList",
  components: {
    Brand
  },
  props: {
    brands: {
      type: Array
    }
  }
};
</script>
