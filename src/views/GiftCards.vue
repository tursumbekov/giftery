<template>
  <b-row>
    <b-col xs="12" md="3">
      <CategoriesList :categories="categories" class="mb-2" />
    </b-col>
    <b-col xs="12" md="9">
      <h1>{{ title }}</h1>
      <BrandsList :brands="brands" />
    </b-col>
  </b-row>
</template>

<script>
import CategoriesList from "@/components/CategoriesList";
import BrandsList from "@/components/BrandsList";

import categories from "@/api/categories.json";
import brands from "@/api/brands.json";

import find from "lodash/find";
import includes from "lodash/includes";

const allCategories = {
  id: 0,
  title: "Все категории",
  sort: "100",
  code: "all"
};

export default {
  name: "GiftCards",
  components: {
    CategoriesList,
    BrandsList
  },
  data: () => ({
    categories: [allCategories, ...categories]
  }),
  computed: {
    brands() {
      return this.categoryId === 0
        ? brands
        : brands.filter(brand => includes(brand.categories, this.categoryId));
    },
    title() {
      const currentCategory = find(this.categories, {
        id: this.categoryId
      });
      return currentCategory ? currentCategory.title : "";
    },
    isCorrectQuery() {
      return find(this.categories, {
        id: this.categoryId
      });
    },
    categoryId() {
      return +this.$route.query.id;
    }
  },
  created() {
    if (!this.isCorrectQuery) {
      this.$router.push({
        query: {
          id: 0
        }
      });
    }
  }
};
</script>

<style scoped>

</style>
