<template>
  <loading :active="isLoading"></loading>

  <div class="bgColor-secondary">
    <div class="cus-pt-lg cus-pb-sm">
      <ProgressBar :step="step"></ProgressBar>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="cart-title">
            <span class="h2">訂單資訊</span>
          </div>
          <div class="">
            <div class="cart-subtitle">
              <span class="h4">商品資訊</span>
            </div>

            <div class="cart-card" v-for="item in carts" :key="item.product.id">
              <div class="img-outer me-3">
                <div class="img-wrap">
                  <img
                    :src="item.product.imageUrl"
                    class="img-fluid"
                    alt="商品圖片"
                  />
                </div>
              </div>
              <div class="txt-wrap me-3">
                <h5>{{ item.product.title }}</h5>
                <div class="price-wrap mb-3">
                  <del class="me-2">NT${{ item.product.origin_price }}</del>
                  <span>NT${{ item.product.price }}</span>
                </div>
                <div class="mb-3">
                  <span class="me-3">數量</span>
                  <span>{{ item.qty }}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div class="cart-subtitle">
                <span class="h4">付款方式</span>
              </div>
              <div class="py-3 h5">
                <span class="pe-3">付款方式</span>
                <span>{{ info.payment }}</span>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div class="cart-subtitle">
                <span class="h4">送貨方式</span>
              </div>

              <div class="py-3 h5">
                <span class="pe-3">送貨方式</span>
                <span>{{ info.dilevery }}</span>
              </div>
            </div>
            <div>
              <div class="cart-subtitle">
                <span class="h4">送貨地址</span>
              </div>
              <div class="py-3 h5">
                <span class="pe-3">送貨地址</span>
                <span>{{ info.user.address }}</span>
              </div>
            </div>
          </div>

          <div>
            <div class="cart-subtitle">
              <span class="h4">收件人資訊</span>
            </div>
            <div class="py-3 h5">
              <span class="pe-3">收件人</span>
              <span>{{ info.user.name }}</span>
            </div>
            <div class="py-3 h5">
              <span class="pe-3">電話</span>
              <span>{{ info.user.tel }}</span>
            </div>
            <div class="py-3 h5">
              <span class="pe-3">信箱</span>
              <span>{{ info.user.email }}</span>
            </div>
          </div>

          <div
            class="btn-wrap d-none d-mb-flex justify-content-end cus-mb-lg cus-mt-sm"
          >
            <button
              type=" button"
              class="btn btn-primary--fill w-30"
              @click="postOrder"
            >
              <span> 確認送出 </span>
            </button>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="cart-title">
            <span class="h2">訂單資訊</span>
          </div>

          <div class="cart-info">
            <div class="info-wrap">
              <div class="info-item">
                <span class="h5">數量</span>
                <span class="h5">{{ cartNum }}</span>
              </div>
              <div class="info-item">
                <span class="h5">小計</span>
                <span class="h5">{{ total }}</span>
              </div>
            </div>
            <div class="total-wrap">
              <div class="info-item">
                <span class="h5">總計</span>
                <span class="h5">{{ total }}</span>
              </div>
            </div>
          </div>

          <div
            class="btn-wrap d-flex d-mb-none justify-content-end cus-mb-lg cus-mt-sm"
          >
            <button
              type=" button"
              class="btn btn-primary--fill w-30"
              @click="postOrder"
            >
              <span> 確認送出 </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "@/libs/emitter";
import cart from "@/components/CartCard.vue";
import product from "@/components/ProductCard.vue";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  components: {
    cart,
    product,
    ProgressBar,
  },
  data() {
    return {
      isLoading: true,
      total: 0,
      cartNum: 0,
      carts: [],
      cart: {},
      info: {
        user: {},
      },
      step: 3,
    };
  },
  methods: {
    getCart() {
      this.cartNum = 0;
      this.total = 0;

      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.carts.forEach((item) => {
            this.cartNum += item.qty;
            this.total += item.final_total;
          });
        });
    },
    postOrder() {
      const data = {
        user: {
          name: this.info.user.name,
          email: this.info.user.email,
          tel: this.info.user.tel,
          address: this.info.user.address,
        },
        message: "",
      };
      this.$http
        .post(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order`,
          { data: data }
        )
        .then((res) => {
          emitter.emit("get-cart");
          window.localStorage.setItem("getCart", res.data.orderId);
          this.$router.push("/Carts/success");
        });
    },
  },
  mounted() {
    this.getCart();
    emitter.on("send-info", (data) => {
      this.info = data;
    });
    const formResult = JSON.parse(window.localStorage.getItem("formResult"));
    this.info = formResult;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style lang="sass" scoped>

</style>
