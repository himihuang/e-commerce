<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-6 right-block">
        <div class="img-block">
          <div class="txt-wrap">Be your Queen</div>
          <div class="img-wrap">
            <img src="../assets/login-img.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 left-block bgColor-secondary">
        <form>
          <div class="title-wrap cus-mb-lg">
            <img src="../assets/shine-dark.svg" alt="" />
            <span class="title h1">登入</span>
          </div>
          <div class="main cus-mb-sm">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="col-form-label"
                >Email address</label
              >
              <input
                type="email"
                class="cus-form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="user.username"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="cus-form-label"
                >Password</label
              >
              <input
                type="password"
                class="cus-form-control"
                id="exampleInputPassword1"
                v-model="user.password"
              />
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
        </form>
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
    };
  },
  methods: {
    submit() {
      this.$http
        .post(`${process.env.VUE_APP_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token } = res.data;
          document.cookie = `himiapi=${token}; expires=${new Date()}`;
          this.$router.push("/dashboard/Products");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="sass" scope="scoped">
@import '@/assets/sass/global.sass'

body
  font-family: 'Noto Serif TC', serif
  background-image: url('../assets/bg.png')
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
