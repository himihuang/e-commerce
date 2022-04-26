<template>
  <ul class="page">
    <li class="page-item" v-if="pages.total_pages >= 5">
      <span class="prev" @click="prevPage">
        <svg
          width="20"
          height="7"
          viewBox="0 0 20 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.375 5.64416L5.75 0.235352L6.625 1.11585L2.125 5.64416H20V6.90202H0.875L0 6.02151L0.375 5.64416Z"
            fill="#897B62"
          />
        </svg>
      </span>
    </li>
    <li
      :class="{ active: page === pages.current_page }"
      class="page-item"
      v-for="page in pages.total_pages"
      :key="page"
      @click="$emit('get-product', page)"
    >
      <span>{{ page }}</span>
    </li>
    <li class="page-item">
      <span class="next" @click="nextPage">
        <svg
          width="20"
          height="7"
          viewBox="0 0 20 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.625 5.64416L14.25 0.235352L13.375 1.11585L17.875 5.64416H0V6.90202H19.125L20 6.02151L19.625 5.64416Z"
            fill="#897B62"
          />
        </svg>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["pages"],
  methods: {
    nextPage() {
      if (this.pages.has_next) {
        const page = this.pages.current_page + 1;
        this.$emit("get-product", page);
      }
    },
    prevPage() {
      if (this.pages.has_pre) {
        const page = this.pages.current_page - 1;
        this.$emit("get-product", page);
      }
    },
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/global.sass'


.page
  display: flex
  .page-item
    cursor: pointer
    padding: $width
    color: $color-primary--text
    &.active
      border-bottom: 1px solid $color-primary--text
</style>
