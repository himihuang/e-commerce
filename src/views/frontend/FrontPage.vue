<template>
  <loading :active="isLoading"></loading>

  <div class="frontpage">
    <transition name="slide-fade">
      <div class="cart-wrap" v-show="ShowCart">
        <div class="title-wrap">
          <h2 class="title">購物車</h2>
          <div class="close" @click="closeCart">
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="cart-list" v-if="carts.length !== 0">
          <cart
            :carts-items="carts"
            @update-qty="getCart"
            @update-item="getCart"
          ></cart>
        </div>

        <div v-if="carts.length == 0" class="cart-noData">
          <h5>目前您的購物車沒有商品</h5>
          <div class="btn-wrap">
            <router-link
              to="/Products"
              class="btn btn-primary--fill w-100"
              @click="ShowCart = false"
            >
              <span> 繼續購物 </span>
            </router-link>
          </div>
        </div>

        <div class="btn-wrap" v-if="carts.length !== 0">
          <router-link
            to="/Carts"
            class="btn btn-primary--fill w-100"
            @click="ShowCart = false"
          >
            <span> 前往購物車 </span>
          </router-link>
        </div>
      </div>
    </transition>
    <div class="modal-bg" v-show="ShowCart"></div>

    <FrontNavbar />
    <div class="main-area">
      <RouterView />
    </div>
    <FrontFooter />
  </div>
</template>

<script>
import FrontNavbar from "@/components/FrontNavbar.vue";
import FrontFooter from "@/components/FrontFooter.vue";
import emitter from "@/libs/emitter";
import cart from "@/components/CartCard.vue";

export default {
  components: {
    cart,
    FrontNavbar,
    FrontFooter,
  },
  data() {
    return {
      isLoading: true,
      carts: [],
      ShowCart: false,
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
    delCartItem(id) {
      this.$http
        .delete(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${id}`
        )
        .then(() => {
          this.getCart();
          emitter.emit("get-cart");
        });
    },
    closeCart() {
      this.ShowCart = false;
    },
  },
  mounted() {
    this.getCart();
    emitter.on("get-cart", () => {
      this.getCart();
    });
    emitter.on("cart-show", (ShowCart) => {
      this.ShowCart = !ShowCart;
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style lang="sass" scope="scoped">

$width: 8px

$color--white: #fff
$color-primary--text: #897B62

.frontpage
  background:  url('~@/assets/img/bg.png')
  box-shadow: inset 2000px 0 0 0 rgba($color-primary--text, .3)
  background-attachment: fixed
  font-family: 'Noto Serif TC', serif
  padding-top: $width*10
  position: relative
  min-height: 100vh
  display: flex
  flex-direction: column

.main-area
  flex: 1
</style>
