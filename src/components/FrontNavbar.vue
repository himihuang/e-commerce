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
        <router-link to="/Favorite" class="nav-item">
          <i class="bi bi-suit-heart-fill"></i>
        </router-link>
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
      <router-link to="/Favorite" class="nav-item cart-num-wrap">
          <i class="bi bi-suit-heart-fill"></i>
      </router-link>
      <router-link to="" class="nav-item cart-num-wrap pb-1" @click="sideCartShow">
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

</style>
