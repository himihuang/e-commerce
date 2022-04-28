<template>
  <div>
    <div class="nav-desk w-100" ref="navDesk">
      <router-link to="/" class="logo">
        <img src="~@/assets/img/logo.svg" alt="JJ飾品" />
      </router-link>

      <div class="main">
        <router-link to="/products" class="nav-item">商品分類</router-link>
        <router-link to="/about" class="nav-item">關於我們</router-link>
        <router-link to="/blogs" class="nav-item">部落格</router-link>
        <!-- <router-link to="" class="nav-item">聯絡我們</router-link> -->
      </div>
      <div class="side">
        <router-link to="/login" class="nav-item">
          <i class="bi bi-person-fill fs-4"></i>
        </router-link>
        <router-link to="" class="nav-item cart-num-wrap" @click="sideCartShow">
          {{ cartsTotal.type }}
          <span class="cart-num" v-show="cartsTotal !== 0">{{
            cartsTotal
          }}</span>
          <i class="fas fa-shopping-cart"></i>
        </router-link>
      </div>
    </div>
  </div>

  <div class="nav-mobile" ref="navMobile">
    <div class="nav-item">
      <router-link to="/" class="logo">
        <img src="~@/assets/img/logo.svg" alt="JJ飾品" />
      </router-link>
    </div>
    <div class="right-side">
      <router-link to="" class="nav-item cart-num-wrap" @click="sideCartShow">
        {{ cartsTotal.type }}
        <span class="cart-num" v-show="cartsTotal !== 0">{{ cartsTotal }}</span>
        <i class="fas fa-shopping-cart"></i>
      </router-link>
      <div class="ham-wrap">
        <input type="checkbox" id="ham" ref="ham" v-model="ham" />
        <label class="ham" for="ham">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div class="nav-content" ref="mobile-nav-content">
          <ul class="main">
            <li class="nav-item">
              <router-link to="/products">
                <span class="h1 me-4">Category</span>
                <span class="h6">商品分類</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">
                <span class="h1 me-4">About</span>
                <span class="h6">關於我們</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="">
                <span class="h1 me-4">Blog</span>
                <span class="h6">部落格</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="">
                <span class="h1 me-4">Contact Us</span>
                <span class="h6">聯絡我們</span>
              </router-link>
            </li>
          </ul>
          <div class="nav-item">
            <router-link to="/login" class="">
              <span class="me-4">
                <i class="far fa-user"></i>
              </span>
              <span>會員中心</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "@/libs/emitter";

export default {
  data() {
    return {
      ShowCart: false,
      carts: [],
      cartsTotal: 0,
      ham: false,
    };
  },
  watch: {
    $route(to, from) {
      this.ham = false;
    },
  },
  methods: {
    sideCartShow() {
      emitter.emit("cart-show", this.ShowCart);
    },
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;

          this.cartsTotal = 0;
          this.carts.forEach((item) => {
            this.cartsTotal += item.qty;
          });
        });
    },
    handleScroll(e) {
      const MobileNavH = this.$refs.navMobile.offsetHeight || "";
      const DeskNavH = this.$refs.navDesk.offsetHeight || "";
      const scrollTop = e.target.documentElement.scrollTop;

      if (scrollTop > MobileNavH || scrollTop > DeskNavH) {
        this.$refs.navMobile.style.backgroundColor = "#897B62";
        this.$refs.navDesk.style.backgroundColor = "#897B62";
      } else {
        this.$refs.navMobile.style.backgroundColor = "transparent";
        this.$refs.navDesk.style.backgroundColor = "transparent";
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getCart();

    emitter.on("get-cart", () => {
      this.getCart();
    });

    emitter.on("delete-cart", () => {
      this.getCart();
    });
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="sass" scope="scoped">
@import '@/assets/sass/global.sass'

// -----**animation**------//
.slide-fade-enter-active, .slide-fade-leave-active
  transition: all 1s ease

.slide-fade-enter-from
  transform: translateX(500px)

.slide-fade-leave-to
  transform: translateX(500px)

.modal-bg
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  background-color: $color-primary
  opacity: .8
  transition: all 1s ease
  z-index: 2
.cart-num-wrap
  position: relative
  .cart-num
    font-size: 0.75rem
    position: absolute
    top: $width
    right: 0
    padding: $width/2 $width
    background-color: $color-primary--border
    border-radius: $width*3

// -----**mobile**------//
.ham
  position: relative
  display: block
  width: $width*4
  height: $width*4
  cursor: pointer
  overflow: hidden
  z-index: 10
  span
    display: block
    position: absolute
    width: 100%
    height: $width/4
    background-color: $color--white
    transform-origin: left
    transition: all .5s
    &:nth-child(1)
      top: $width/2

    &:nth-child(2)
      top: $width*2
      right: 0
      width: 50%

    &:nth-child(3)
      top: $width*3.4
#ham
  display: none

#ham:checked ~ .ham
  span
    &:nth-child(1)
      transform: rotate(45deg)
    &:nth-child(2)
      right: -100px
    &:nth-child(3)
      transform: rotate(-45deg)

#ham:checked ~ .nav-content
  right: 0

.nav-mobile
  position: fixed
  top: 0
  display: none
  justify-content: space-between
  align-items: center
  padding: $width*2
  border-bottom: 1px solid $color--white
  width: 100%
  z-index: 10
  @include pad
    display: flex
  .logo
    img
     height: $width*5
  .right-side
    display: flex
    .ham
      margin: $width
    .cart-num-wrap
      width: $width*5
      height: $width*5
      color: $color--white
      display: flex
      align-items: flex-end
  .nav-content
    display: flex
    align-items: center
    justify-content: space-around
    flex-direction: column
    width: 100%
    height: 100%
    background-color: rgba($color-primary, .9)
    position: fixed
    top: 0
    right: -1000px
    z-index: 6
    transition: all .5s
    overflow: hidden
    .nav-item
      padding-top: $width*3
      padding-bottom: $width*3
      color: $color--white
      a
        color: $color--white
    .main
      text-align: center
      color: $color--white
      position: relative
      &:before, after
        content: ''
        display: block
        position: absolute
        top: 0%
        left: -70vw
        width: 100vw
        height: 100vw
        border: 1px solid $color--white
        border-radius: 50%
        z-index: -1
      &:before
        animation: rotateCircle 5s linear infinite
      &:after
        animation: rotateCircleTwo 5s linear infinite

@keyframes rotateCircle
  0%
    transform: translate(0, 0)
  25%
    transform: translate(10px, 10px)
  50%
    transform: translate(10px, -10px)
  75%
    transform: translate(-10px, -10px)
  100%
    transform: translate(0, 0)

@keyframes rotateCircleTwo
  0%
    transform: translate(0, 0)
  25%
    transform: translate(-10px, -10px)
  50%
    transform: translate(-10px, 10px)
  75%
    transform: translate(10px, 10px)
  100%
    transform: translate(0, 0)

// -----**desk**------//
.nav-desk
  position: fixed
  top: 0
  display: flex
  justify-content: space-between
  align-items: center
  border-bottom: 1px solid $color--white
  padding: $width*3
  z-index: 10
  @include pad
    display: none
  .logo
    height: 40px
    img
      height: 100%
  .nav-item
    padding: $width*3
    color: $color--white
    text-decoration: none
    text-shadow: 0 $width/2 $width*2 #333
    opacity: .5
  .nav-item.is--active
    opacity: 1
</style>
