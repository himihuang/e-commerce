<template>
  <loading :active="isLoading"></loading>

  <div class="mt-navbar-lg">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3">
          <div class="select-wrap d-block d-lg-none w-100 color--white mb-4">
            <select class="cus-select color--white" v-model="selected">
              <option value="請選擇" disabled>請選擇</option>
              <option v-for="item in this.category" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="category-list d-none d-lg-block">
            <div class="category-title">
              <img src="~@/assets/img/shine.svg" class="dec-top" alt="光芒" />
              <h5 class="title">分類</h5>
              <img
                src="~@/assets/img/shine.svg"
                class="dec-bottom"
                alt="光芒"
              />
            </div>

            <div class="category-item" @click="getCategoryAll">
              <router-link to="/products/all">
                <img
                  src="~@/assets/img/star.svg"
                  class="me-2 star"
                  alt="星星"
                />
                全部
              </router-link>
            </div>
            <div
              class="category-item"
              v-for="item in this.category"
              :key="item"
              @click="getCategoryItems(item)"
            >
              <router-link :to="`/products/${item}`">
                <img
                  src="~@/assets/img/star.svg"
                  class="me-2 star"
                  alt="星星"
                />
                {{ item }}</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-9">
          <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
            <div
              class="col mb-4"
              v-for="product in products"
              :key="product.id"
              v-show="!categoryProducts.length"
            >
              <product
                :productItem="product"
                @toggle-favorite="toggleFavorite"
                :favorite="favorite"
              ></product>
            </div>
            <div
              class="col mb-4"
              v-for="product in categoryProducts"
              :key="product.id"
              v-show="categoryProducts.length"
            >
              <product
                :productItem="product"
                @toggle-favorite="toggleFavorite"
                :favorite="favorite"
              ></product>
            </div>
          </div>
          <div class="page-wrap cus-mt-sm cus-mb-lg">
            <pagination
              :pages="pagination"
              @get-product="getProduct"
            ></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product from "@/components/ProductCard.vue";
import pagination from "@/components/Pagination.vue";

export default {
  components: {
    product,
    pagination,
  },
  data() {
    return {
      isLoading: true,
      products: [],
      cart: {},
      category: [],
      categoryProducts: [],
      selected: "請選擇",
      pagination: {},
      favorite:
        JSON.parse(window.localStorage.getItem("toggle-favorite")) || [],
    };
  },
  watch: {
    selected() {
      this.getCategoryItems();
    },
  },

  methods: {
    toggleFavorite(item) {
      const favoriteId = this.favorite.findIndex((element) => element === item);
      if (favoriteId === -1) {
        this.favorite.push(item);
      } else {
        this.favorite.splice(favoriteId, 1);
      }
      window.localStorage.setItem(
        "toggle-favorite",
        JSON.stringify(this.favorite)
      );
    },
    getProduct(page = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/?page=${page}`
        )
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;

          this.products.forEach((item) => {
            if (!this.category.includes(item.category)) {
              return this.category.push(item.category);
            }
          });
        });
    },
    getCategoryAll() {
      this.categoryProducts = this.products;
    },
    getCategoryItems(category = this.selected) {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/?category=${category}`
        )
        .then((res) => {
          this.categoryProducts = res.data.products;
        });
    },
  },
  mounted() {
    this.getProduct();
    this.isLoading = false;
    this.getCategoryItems(this.$route.params.id);
  },
};
</script>

<style lang="sass">

</style>
