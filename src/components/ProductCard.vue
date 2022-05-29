<template>
  <div class="product-card h-100">
    <div class="img-wrap">
      <div class="heart-wrap" @click="$emit('toggle-favorite', product.id)">
        <i class="bi bi-heart" v-if="!favorite.includes(product.id)"></i>
        <i
          class="bi bi-suit-heart-fill"
          v-if="favorite.includes(product.id)"
        ></i>
      </div>
      <img :src="product.imageUrl" alt="商品圖片" />
      <router-link
        :to="`/Product/${productItem.id}`"
        class="btn btn-primary--fill w-100"
      >
        <span>查看更多</span>
      </router-link>
    </div>
    <div class="txt-wrap">
      <h5>{{ product.title }}</h5>
      <div class="price-wrap">
        <del>NT$ {{ product.origin_price }} 元</del>
        <h5>NT$ {{ product.price }} 元</h5>
      </div>
    </div>

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
  props: ["productItem", "favorite"],
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

</style>
