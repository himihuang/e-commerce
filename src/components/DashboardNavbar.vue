<template>
  <div class="nav-desk w-100">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.svg" alt="" />
      </router-link>
    </div>
    <div class="main">
      <router-link to="/dashboard/Products" class="nav-item"
        >產品列表</router-link
      >
      <router-link to="/dashboard/Orders" class="nav-item"
        >訂單列表</router-link
      >
      <router-link to="" class="nav-item">部落格</router-link>
      <router-link to="" class="nav-item">優惠券</router-link>
    </div>
    <div class="side">
      <button type="button" class="btn nav-item" @click="logout">
        <i class="fs-2 bi bi-box-arrow-in-right"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCheck: false,
    };
  },
  methods: {
    checkLogIn() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)himiapi\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common["Authorization"] = token;

      this.$http
        .post(`${process.env.VUE_APP_URL}/api/user/check`)
        .then((res) => {
          console.log(res);
        })
        .catch(() => {
          this.$router.push("/login");
        });
    },
    logout() {
      this.$http
        .post(`${process.env.VUE_APP_URL}/logout`)
        .then(() => {
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.checkLogIn();
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/global.sass'

.nav-desk
  max-width: 1200px
  display: flex
  justify-content: space-between
  align-items: center
  border-bottom: 1px solid $color--white
  padding-left: $width*2
  padding-right: $width*2
  background-color: $color-primary--text
  .logo
    height: 40px
    img
      height: 100%
  .nav-item
    padding: $width*2 $width*3
    color: $color--white
    text-decoration: none
    text-shadow: 0 $width/2 $width*2 #333
    opacity: .5
  .nav-item.is--active
    opacity: 1

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
</style>
