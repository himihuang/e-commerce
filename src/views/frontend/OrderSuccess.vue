<template>
  <loading :active="isLoading"></loading>

  <div class="bgColor-secondary">
    <div class="cus-pt-lg cus-pb-lg">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 success-img">
            <div class="img-outer">
              <div class="img-wrap">
                <img src="@/assets/img/decore-img.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 success-content">
            <div class="title-wrap">
              <img src="~@/assets/img/thankYou.svg" alt="謝謝購買" />
            </div>
            <div class="content cus-mb-sm">
              <div class="h4 mb-4">
                感謝你！
                <br />
                你的訂單已成立
              </div>
              <span>這是您的訂單編號：{{ order_id }}</span>
            </div>
            <div class="btn-wrap">
              <router-link to="/" class="btn btn-primary--fill w-30 ms-2">
                <span> 回首頁 </span>
              </router-link>
              <router-link
                to="/Products"
                class="btn btn-primary--fill w-30 ms-2"
              >
                <span> 繼續購物 </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      order_id: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    this.order_id = window.localStorage.getItem("getCart");
  },
};
</script>

<style lang="sass">
</style>
