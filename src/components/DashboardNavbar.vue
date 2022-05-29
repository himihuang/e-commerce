<template>
  <div class="nav-desk w-100">
    <div class="logo">
      <router-link to="/">
        <img src="~@/assets/img/logo.svg" alt="JJ飾品" />
      </router-link>
    </div>
    <div class="main">
      <router-link to="/dashboard/Products" class="nav-item"
        >產品列表</router-link
      >
      <router-link to="/dashboard/Orders" class="nav-item"
        >訂單列表</router-link
      >
      <router-link to="/dashboard/Blogs" class="nav-item">部落格</router-link>
      <!-- <router-link to="" class="nav-item">優惠券</router-link> -->
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

      this.$http.post(`${process.env.VUE_APP_URL}/api/user/check`).catch(() => {
        this.$router.push("/login");
      });
    },
    logout() {
      this.$http.post(`${process.env.VUE_APP_URL}/logout`).then(() => {
        this.$router.push("/login");
      });
    },
  },
  mounted() {
    this.checkLogIn();
  },
};
</script>

<style lang="sass" scope="scoped">


</style>
