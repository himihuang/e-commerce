<template>
  <div class="cart-card" v-for="item in carts" :key="item.product.id">
    <div class="img-outer me-3">
      <div class="img-wrap">
        <img :src="item.product.imageUrl" class="img-fluid" />
      </div>
    </div>
    <div class="txt-wrap me-3">
      <h5>{{ item.product.title }}</h5>
      <div class="price-wrap mb-3">
        <del class="me-2">NT${{ item.product.origin_price }}</del>
        <span>NT${{ item.product.price }}</span>
      </div>
      <div class="num-select-wrap mb-3">
        <span class="me-3">數量</span>
        <div class="num-select">
          <select
            name=""
            id=""
            v-model="item.qty"
            @change="updateCart(item.id, item.qty)"
          >
            <option :value="num" v-for="num in 20" :key="num">
              {{ num }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <button type="button" class="btn delete" @click="delCartItem(item.id)">
      <img src="~@/assets/img/close.svg" />
    </button>
  </div>
</template>

<script>
import emitter from "@/libs/emitter";

export default {
  props: ["carts-items"],
  emits: ["update-qty", "update-item"],
  data() {
    return {
      carts: [],
      cart: {},
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = this.cartsItems;
          this.carts = res.data.data.carts;
        });
    },
    delCartItem(id) {
      this.$http
        .delete(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${id}`
        )
        .then(() => {
          this.getCart();
          this.$emit("update-item");
          emitter.emit("delete-cart");
        });
    },
    updateCart(id, qty) {
      this.cart = {
        product_id: id,
        qty: qty,
      };
      this.$http
        .put(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${id}`,
          { data: this.cart }
        )
        .then(() => {
          this.$emit("update-qty");
        });
    },
  },
  mounted() {
    this.getCart();
    emitter.on("get-cart", () => {
      this.getCart();
    });
    emitter.on("add-cart", (data) => {
      this.carts = data;
      this.getCart();
    });
  },
};
</script>

<style lang="sass">

$width: 8px

$color--white: #fff
$color-primary--text: #897B62
$color-primary: #B8AC97
$color-secondary: #FEFBF5

.cart-card
  display: flex
  flex-direction: row
  padding-top: $width*3
  padding-bottom: $width*3
  color: $color-primary--text

  .img-outer
    width: $width*12
  .img-wrap
    with: 100%
    height: 0
    padding-bottom: 115%
    overflow: hidden
    img
      width: 100%
  .txt-wrap
    flex: 1
  .delete
    display: flex
    align-items: flex-start
    padding: 0
</style>
