<template>
  <loading :active="isLoading"></loading>

  <div class="bgColor-secondary cart-spep">
    <div class="cus-pt-lg cus-pb-sm">
      <ProgressBar :step="step"></ProgressBar>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="cart-title">
            <span class="h2">購物車</span>
          </div>
          <div class="">
            <cart
              :carts-items="carts"
              @update-qty="getCart"
              @update-item="getCart"
            ></cart>
          </div>

          <div class="cart-title">
            <span class="h2">加購商品</span>
          </div>
          <div class="row row-cols-2 row-cols-lg-4">
            <div class="col mb-4" v-for="product in products" :key="product.id">
              <product :product-item="product"></product>
            </div>
          </div>

          <div
            class="btn-wrap d-mb-flex d-none justify-content-end cus-mb-lg cus-mt-sm"
          >
            <router-link to="/Carts/step2" class="btn btn-primary--fill w-30">
              <span> 確認送出 </span>
            </router-link>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="cart-title">
            <span class="h2">訂單資訊</span>
          </div>

          <div class="cart-info">
            <div class="info-wrap">
              <div class="info-item">
                <span class="h5">數量</span>
                <span class="h5">{{ cartNum }}</span>
              </div>
              <div class="info-item">
                <span class="h5">小計</span>
                <span class="h5">{{ total }}</span>
              </div>
            </div>
            <div class="total-wrap">
              <div class="info-item">
                <span class="h5">總計</span>
                <span class="h5">{{ total }}</span>
              </div>
            </div>
          </div>

          <div
            class="btn-wrap d-flex justify-content-end cus-mb-lg cus-mt-sm d-mb-none"
          >
            <router-link to="/Carts/step2" class="btn btn-primary--fill w-30">
              <span> 確認送出 </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cart from "@/components/CartCard.vue";
import product from "@/components/ProductCard.vue";
import ProgressBar from "@/components/ProgressBar.vue";
export default {
  components: {
    cart,
    product,
    ProgressBar,
  },
  data() {
    return {
      isLoading: true,
      products: [],
      total: 0,
      cartNum: 0,
      carts: [],
      cart: {},
      step: 1,
    };
  },
  methods: {
    getProduct() {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products.slice(0, 4);
        });
    },
    getCart() {
      this.cartNum = 0;
      this.total = 0;

      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.carts.forEach((item) => {
            this.cartNum += item.qty;
            this.total += item.final_total;
          });
        });
    },
  },
  mounted() {
    this.getProduct();
    this.getCart();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/global.sass'

.cart-title
  padding-top: $width*5
  padding-bottom: $width*5
  .h2
    display: inline-block
    color: $color-primary--text
    position: relative
    &:before
      content: "//  "
    &:after
      content: "  //"

// -----**product-card**------//
.cart-spep
  .product-card
    color: $color-primary--text
    .txt-wrap
      color: $color-primary--text
    .btn-line
      color: $color-primary--text
      border-top: 1px solid $color-primary--text
      border-bottom: 1px solid $color-primary--text
      &:hover
        color: $color--white
        &:before
          color: $color--white
          background-color: $color-primary--text

// -----**cart-info**------//
.cart-info
  .info-item
    display: flex
    justify-content: space-between
    padding-top: $width*1.5
    padding-bottom: $width*1.5
  .info-wrap
    border-bottom: 1px solid $color-primary--text
</style>
