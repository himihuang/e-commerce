<template>
  <div class="login">
    <div class="row">
      <div class="col-12 col-sm-6 right-block">
        <div class="img-block">
          <div class="txt-wrap">Be your Queen</div>
          <div class="img-wrap">
            <img src="~@/assets/img/login-img.png" alt="登入圖片" />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 left-block bgColor-secondary">
        <Form v-slot="{ errors }" @submit="submit">
          <div class="title-wrap cus-mb-lg">
            <img src="~@/assets/img/shine-dark.svg" alt="光芒圖片" />
            <span class="title h1">登入</span>
          </div>
          <div class="main cus-mb-sm">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="col-form-label"
                >Email address</label
              >
              <Field
                type="email"
                name="信箱"
                id="email"
                class="cus-form-control"
                :class="{ 'is-invalid': errors['信箱'] }"
                :rules="isEmail"
                v-model="user.username"
              ></Field>
              <ErrorMessage
                name="信箱"
                class="invalid-feedback"
                ref="errMsg"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="cus-form-label"
                >Password</label
              >
              <Field
                type="password"
                name="密碼"
                id="password"
                class="cus-form-control"
                :class="{ 'is-invalid': errors['密碼'] }"
                :rules="isPassWord"
                v-model="user.password"
              ></Field>
              <ErrorMessage
                name="密碼"
                class="invalid-feedback"
                ref="errPass"
              ></ErrorMessage>
            </div>
          </div>

          <div class="btn-block">
            <button
              type="submit"
              class="btn btn-primary--fill w-30"
              @click="submit"
            >
              <span> 送出 </span>
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      member: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    isEmail(value) {
      const email =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (value && email.test(value) && this.member.username == "") {
        return "";
      }
      if (
        value &&
        email.test(value) &&
        this.member.username == "not this user"
      ) {
        return "信箱或密碼錯誤";
      }

      if (!value) {
        return "此欄位為必填";
      }
    },
    isPassWord(value) {
      if (value && this.member.password == "") {
        return "";
      }
      if (value && this.member.password == "not this user") {
        return "密碼或信箱錯誤";
      }
      if (!value) {
        return "此欄位為必填";
      }
    },
    submit() {
      this.$http
        .post(`${process.env.VUE_APP_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token } = res.data;
          document.cookie = `himiapi=${token}; expires=${new Date()}`;
          this.$router.push("/dashboard/Products");
        })
        .catch(() => {
          this.member.username = "not this user";
          this.member.password = "not this user";
          this.isEmail(this.user.username);
          this.isPassWord(this.user.password);
        });
    },
  },
};
</script>

<style lang="sass" scope="scoped">
@import '@/assets/sass/global.sass'

.login
  font-family: 'Noto Serif TC', serif
  background-image: url('~@/assets/img/bg.png')
  background-attachment: fixed
  z-index: 1

.right-block
  display: flex
  justify-content: center
  align-items: center
  .img-block
    width: 65%
    height: auto
    max-height: 80%
    position: relative
    .txt-wrap
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      color: $color--white
      font-size: $width*9
      text-shadow: 0 $width/2 $width/2 $color-gray-200
  .img-wrap
    width: 100%
    height: 0
    padding-bottom: 120%
    overflow: hidden
    img
      width: 100%

.left-block
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  form
    width: 80%
    .btn-block
      text-align: center
  .title-wrap
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    color: $color-primary--text
</style>
