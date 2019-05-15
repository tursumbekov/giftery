<template>
  <div class="brand mb-4" :class="{ brand__disabled: !isActive }">
    <img :src="brand.image" :alt="brand.title" class="brand__image mb-2" />
    <p class="brand__title">{{ brand.title }}</p>
    <div class="brand__footer">
      <b-select
        v-model="face"
        :options="faces"
        :disabled="!isActive"
        class="mr-2"
      />
      <b-button
        @click="add"
        :disabled="!isActive || isAddedToCart"
        variant="primary"
        class="brand__button"
      >
        {{ buttonTitle }}
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import find from "lodash/find";

export default {
  name: "Brand",
  props: {
    brand: {
      type: Object
    }
  },
  data() {
    return {
      face: `${this.brand.faces[0]} руб.`
    };
  },
  computed: {
    faces() {
      return this.brand.faces.map(face => `${face} руб.`);
    },
    isActive() {
      return this.brand.faces.length;
    },
    isAddedToCart() {
      return !!find(this.cartItems, {
        id: this.brand.id,
        face: this.face
      });
    },
    buttonTitle() {
      if (!this.isActive) {
        return "Недоступно";
      } else if (this.isAddedToCart) {
        return "Добавлено";
      } else {
        return "В корзину";
      }
    },
    ...mapState(["cartItems"])
  },
  methods: {
    add() {
      this.addToCart({
        id: this.brand.id,
        face: this.face
      });
    },
    ...mapActions(["addToCart"])
  }
};
</script>

<style lang="scss" scoped>
.brand {
  border: 1px solid #ccc;
  border-radius: 2px;
  &__disabled {
    opacity: 0.6;
  }
  &__title {
    padding: 0 10px;
    margin-bottom: 7px;
  }
  &__image {
    width: 100%;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px 10px;
  }
  &__button {
    white-space: nowrap;
  }
}
</style>
