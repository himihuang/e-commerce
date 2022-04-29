<template>
  <loading :active="isLoading"></loading>

  <div class="mt-navbar-lg cus-mb-lg">
    <div class="container">
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
        <template v-if="favoriteProducts.length !== 0">
          <div
            class="col mb-4"
            v-for="product in favoriteProducts"
            :key="product.id"
          >
            <product
              :productItem="product"
              @toggle-favorite="toggleFavorite"
              :favorite="favorite"
            ></product>
          </div>
        </template>
      </div>
      <template v-if="favoriteProducts.length == 0">
        <div class="favorite-wrap">
          <div class="favorite-txt">
            <h3>我的最愛沒有東西</h3>
            <P class="mb-4">快點到商品區挑選喜歡的商品吧</P>
            <router-link to="/Products" class="btn btn-primary--fill w-30 ms-2">
              <span> 繼續購物 </span>
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import product from "@/components/ProductCard.vue";

export default {
  components: {
    product,
  },
  data() {
    return {
      isLoading: true,
      products: [],
      pagination: {},
      favoriteProducts: [],
      favorite:
        JSON.parse(window.localStorage.getItem("toggle-favorite")) || [],
    };
  },
  watch: {
    favorite: {
      handler() {
        this.getFavoriteProducts();
      },
      deep: true,
    },
    products() {
      this.getFavoriteProducts();
    },
  },
  methods: {
    getFavoriteProducts() {
      this.favoriteProducts = this.products.filter((item1) =>
        this.favorite.some((item2) => item1.id === item2)
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
        });
    },
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
  },
  mounted() {
    this.isLoading = false;

    this.getProduct();
    this.getFavoriteProducts();
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/global.sass'
.favorite-wrap
  display: flex
  justify-content: center
.favorite-txt
  border: 1px solid #fff
  border-radius: 50% 50% 0 0
  text-align: center
  padding: $width*10 $width*5
  color: $color--white
  display: inline-block
  z-index: 1
  position: relative
  &:before
   content: ''
   display: block
   width: 100%
   height: 100%
   position: absolute
   left: -5%
   top: -5%
   border: 1px solid #fff
   border-radius: 50% 50% 0 0
</style>
