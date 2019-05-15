<template>
  <div>
    <ul class="categories d-none d-md-block d-lg-block d-xl-block">
      <li v-for="category in categories" :key="category.id">
        <b-link :to="{ query: { id: category.id } }" class="categories__item">
          {{ category.title }}
        </b-link>
      </li>
    </ul>
    <b-select
      v-model="categoryId"
      :options="options"
      @input="selectCategory"
      class="d-md-none d-lg-none d-xl-none"
    />
  </div>
</template>

<script>
export default {
  name: "CategoriesList",
  props: {
    categories: {
      type: Array
    }
  },
  data() {
    return {
      category: 0
    };
  },
  computed: {
    options() {
      return this.categories.map(category => ({
        value: category.id,
        text: category.title
      }));
    },
    categoryId: {
      get() {
        return this.$route.query.id;
      },
      set(val) {
        this.category = val;
      }
    }
  },
  methods: {
    selectCategory(value) {
      this.$router.push({
        query: {
          id: value
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.categories {
  padding: 15px;
  border-radius: 2px;
  border: 1px solid #ccc;
}
.categories__item {
  display: block;
}
.router-link-exact-active {
  color: $giftery-primary;
}
</style>
