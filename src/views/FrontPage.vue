<template>
  <transition name="slide-fade">
    <div class="cart-wrap" v-show="ShowCart">
      <div class="title-wrap">
        <h2 class="title">購物車</h2>
        <div class="close" @click="closeCart">
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="cart-list">
        <cart :carts-items="carts" @update-qty="getCart"></cart>
      </div>
      <div class="btn-wrap">
        <router-link to="/Carts" class="btn btn-primary--fill w-100">
          <span> 前往購物車 </span>
        </router-link>
      </div>
    </div>
  </transition>
  <div class="modal-bg" v-show="ShowCart"></div>
  <FrontNavbar></FrontNavbar>
  <router-view />
  <FrontFooter></FrontFooter>
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
      console.log(id);
      this.$http
        .delete(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${id}`
        )
        .then((res) => {
          console.log(res);
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    closeCart() {
      this.ShowCart = false;
    },
  },
  mounted() {
    this.getCart();
    emitter.on("cart-show", (ShowCart) => {
      this.ShowCart = !ShowCart;
    });
  },
};
</script>
<style lang="sass" scope="scoped">
$width: 8px

$color--white: #fff
$color-primary--text: #897B62

body
  background-image: url('../assets/bg.png')
  background-attachment: fixed
  font-family: 'Noto Serif TC', serif

.footer
  padding-top: $width*10
  padding-bottom: $width*10
  position: relative
  color: $color-primary--text
  overflow: hidden
  &:before
    content: ''
    display: block
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    filter: blur(4px)
    background-image: linear-gradient(to bottom, rgba(255,255,255,.8),rgba(255,255,255,.2))
    z-index: -1
  .title-wrap
    padding-bottom: $width*2
    .title
      position: relative
      padding-left: $width*4
      &:before
        content: ''
        display: block
        position: absolute
        top: 50%
        left: 0
        transform: translateY(-50%)
        width: $width*3
        height: $width*3
        background-image: url('../assets/footer-star.svg')
        background-position: center
        background-repeat: no-repeat
  .link-list
    li
      display: block
      position: relative
      padding-left: $width*4
      padding-bottom: $width
      &:before
        content: ''
        display: block
        position: absolute
        top: 50%
        left: 0
        transform: translateY(-50%)
        width: $width*2
        height: 1px
        background-color: $color-primary--text
        transition: all 1s ease
      &:hover:before
        left: $width
  .list
    li
      display: block
      position: relative
      padding-left: $width*4
      padding-bottom: $width
</style>
