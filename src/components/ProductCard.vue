<template>
  <div class="product-card h-100">
    <router-link :to="`/Product/${productItem.id}`">
      <div class="img-wrap">
        <img :src="product.imageUrl" alt="商品圖片" />
      </div>
      <div class="txt-wrap">
        <h5>{{ product.title }}</h5>
        <div class="price-wrap">
          <del>NT$ {{ product.origin_price }} 元</del>
          <h5>NT$ {{ product.price }} 元</h5>
        </div>
      </div>
    </router-link>

    <div class="btn-wrap">
      <button
        class="btn btn-line w-100"
        type="button"
        @click="addToCart(product)"
      >
        加入購物車
      </button>
    </div>
  </div>
</template>

<script>
import emitter from "@/libs/emitter";
export default {
  props: ["productItem"],
  data() {
    return {
      product: this.productItem,
      cart: {},
      carts: [],
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
        });
    },
    addToCart(product, qty = 1) {
      this.cart = {
        product_id: product.id,
        qty: qty,
      };

      this.$http
        .post(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`,
          { data: this.cart }
        )
        .then((res) => {
          this.cart = res.data.data;
          this.carts.forEach((item) => {
            if (this.cart.product.title == item.product.title) {
              item = this.cart;
            }
          });
          emitter.emit("get-cart");
          emitter.emit("add-cart", this.carts);
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/global.sass'

// -----**product-card**------//
.product-card
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between
  color: $color--white
  transition: all .5s
  &:hover
    .img-wrap
      img
        width: 120%
  .txt-wrap
    padding-top: $width*2
    padding-bottom: $width*2
    text-align: center
    color: $color--white
  .img-wrap
    +img(115%)
    img
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      width: 100%
      transition: all .5s
</style>
