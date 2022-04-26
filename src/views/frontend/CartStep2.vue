<template>
  <loading :active="isLoading"></loading>

  <div class="bgColor-secondary">
    <div class="cus-pt-lg cus-pb-sm">
      <ProgressBar :step="step"></ProgressBar>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <Form v-slot="{ errors }" @submit="submit" ref="form">
            <div class="cart-title">
              <span class="h2">顧客資料</span>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="name" class="col-form-label form-label"
                    >姓名<span class="text-danger">*</span></label
                  >
                  <div class="form-wrap">
                    <Field
                      type="text"
                      name="姓名"
                      id="name"
                      class="cus-form-control"
                      placeholder="例：王小明"
                      :class="{ 'is-invalid': errors['姓名'] }"
                      rules="required"
                      v-model="form.member.name"
                    ></Field>
                    <ErrorMessage
                      name="姓名"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label for="email" class="col-form-label form-label"
                    >信箱<span class="text-danger">*</span></label
                  >
                  <div class="form-wrap">
                    <Field
                      type="email"
                      name="信箱"
                      id="email"
                      class="cus-form-control"
                      placeholder="例：xxx@gmail.com"
                      :class="{ 'is-invalid': errors['信箱'] }"
                      rules="email|required"
                      v-model="form.member.email"
                    ></Field>
                    <ErrorMessage
                      name="信箱"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label for="phone" class="col-form-label form-label"
                    >電話<span class="text-danger">*</span></label
                  >
                  <div class="form-wrap">
                    <Field
                      type="text"
                      name="電話"
                      id="phone"
                      class="cus-form-control"
                      placeholder="例：0912123123"
                      :rules="isPhone"
                      :class="{ 'is-invalid': errors['電話'] }"
                      v-model="form.member.tel"
                    ></Field>
                    <ErrorMessage
                      name="電話"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>
            </div>

            <div class="cart-title">
              <span class="h2">收貨人資料</span>
            </div>
            <div class="row">
              <div class="col-12">
                <label class="checkbox-wrap mb-4">
                  同顧客資料
                  <input
                    type="checkbox"
                    v-model="form.userInfo"
                    @change="fillInfo"
                  />
                  <div class="cus-checkbox"></div>
                </label>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="recipientName" class="col-form-label form-label"
                    >姓名<span class="text-danger">*</span></label
                  >
                  <div class="form-wrap">
                    <Field
                      type="text"
                      name="收件人姓名"
                      id="recipientName"
                      class="cus-form-control"
                      placeholder="例：王小明"
                      rules="required"
                      :class="{ 'is-invalid': errors['收件人姓名'] }"
                      v-model="form.user.name"
                    ></Field>
                    <ErrorMessage name="收件人姓名" class="invalid-feedback">
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label for="recipientEmail" class="col-form-label form-label"
                    >信箱<span class="text-danger">*</span></label
                  >
                  <div class="form-wrap">
                    <Field
                      type="email"
                      name="收件人信箱"
                      id="recipientEmail"
                      class="cus-form-control"
                      placeholder="例：xxx@gmail.com"
                      rules="email|required"
                      :class="{ 'is-invalid': errors['收件人信箱'] }"
                      v-model="form.user.email"
                    ></Field>
                    <ErrorMessage
                      name="收件人信箱"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label for="recipientPhone" class="col-form-label form-label"
                    >電話<span class="text-danger">*</span></label
                  >
                  <div class="form-wrap">
                    <Field
                      type="text"
                      name="收件人電話"
                      id="recipientPhone"
                      class="cus-form-control"
                      placeholder="例：0912123123"
                      rules="required|digits:10"
                      :class="{ 'is-invalid': errors['收件人電話'] }"
                      v-model="form.user.tel"
                    ></Field>
                    <ErrorMessage
                      name="收件人電話"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>
            </div>

            <div class="cart-title">
              <span class="h2">付款方式</span>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="name" class="col-form-label form-label"
                    >付款方式<span class="text-danger">*</span></label
                  >
                  <div class="select-wrap">
                    <select class="cus-select" v-model="form.payment">
                      <option value="請選擇" disabled>請選擇</option>
                      <option value="信用卡支付">信用卡支付</option>
                      <option value="轉帳付款">轉帳付款</option>
                      <option value="貨到付款">貨到付款</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="cart-title">
              <span class="h2">送貨資料*</span>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="name" class="col-form-label form-label"
                    >送貨方式<span class="text-danger">*</span></label
                  >
                  <div class="select-wrap">
                    <select class="cus-select" v-model="form.dilevery">
                      <option value="請選擇" disabled>請選擇</option>
                      <option value="宅配">宅配</option>
                      <option value="全家取貨不付款">全家取貨不付款</option>
                      <option value="7-11取貨不付款">7-11取貨不付款</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label
                    for="recipientAddress"
                    class="col-form-label form-label"
                    >收件人地址<span class="text-danger">*</span></label
                  >
                  <div class="form-wrap">
                    <Field
                      type="text"
                      name="收件人地址"
                      id="recipientAddress"
                      class="cus-form-control"
                      placeholder="例：台北市信義區"
                      rules="required"
                      :class="{ 'is-invalid': errors['收件人地址'] }"
                      v-model="form.user.address"
                    ></Field>
                    <ErrorMessage
                      name="收件人地址"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="btn-wrap d-flex justify-content-between cus-mb-lg cus-mt-sm"
            >
              <router-link
                to="/Carts/step1"
                class="btn btn-primary--border w-30"
              >
                回上一頁
              </router-link>
              <button
                type="submit"
                @click.prevent="submit"
                class="btn btn-primary--fill w-30"
              >
                <span> 確認送出 </span>
              </button>
            </div>
          </Form>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      data: {},
      step: 2,
      form: {
        member: {
          name: "",
          email: "",
          tel: "",
        },
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        payment: "請選擇",
        dilevery: "請選擇",
        message: "",
        userInfo: false,
      },
    };
  },
  methods: {
    isPhone(value) {
      if (!value) {
        return "此欄位為必填";
      } else {
        const phoneNumber = /^(09)[0-9]{8}$/;
        return phoneNumber.test(value) ? true : "需要正確的電話號碼";
      }
    },
    fillInfo() {
      this.userInfo = true;
      this.form.user.name = this.form.member.name;
      this.form.user.email = this.form.member.email;
      this.form.user.tel = this.form.member.tel;
    },
    submit() {
      this.data = {
        user: this.form.user,
        message: this.form.message,
      };

      this.$refs.form.validate().then((res) => {
        const { valid } = res;
        if (valid) {
          window.localStorage.setItem("formResult", JSON.stringify(this.form));
          this.$router.push("/Carts/step3");
        } else {
          return;
        }
      });
    },
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
  },
  mounted() {
    this.getCart();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/sass/global.sass'




.cart-title
  padding-top: $width*5
  padding-bottom: $width*5
  .h2
    display: inline-block
    color: $color-primary--text
    position: relative
    &:before
      content: "//  "

    &:after
      content: "  //"


// -----**product-card**------//
.product-card
  color: $color-primary--text
  .btn-line
    color: $color-primary--text
    border-top: 1px solid $color-primary--text
    border-bottom: 1px solid $color-primary--text
    &:hover
      color: $color--white
      background-color: $color-primary--text

// -----**cart-info**------//
.cart-info
  .info-item
    display: flex
    justify-content: space-between
    padding-top: $width*1.5
    padding-bottom: $width*1.5
  .info-wrap
    border-bottom: 1px solid $color-primary--text
</style>
