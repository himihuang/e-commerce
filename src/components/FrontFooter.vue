<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3">
          <router-link to="/" class="logo">
            <img src="~@/assets/img/footer-logo.svg" alt="JJ飾品" />
          </router-link>
        </div>
        <div class="col-12 col-md-3">
          <div class="title-wrap">
            <span class="h5 title">聯絡我們</span>
          </div>
          <ul class="list">
            <li>
              <span>電話 ：</span>
              <span>
                <a href="tel:+886-0800000004">0800 000 004</a>
              </span>
            </li>
            <li>
              <span>營業時間：</span>
              <span>9:00 am - 18:00 pm</span>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <div class="title-wrap">
            <span class="h5 title">關於我們</span>
          </div>
          <ul class="link-list">
            <li>
              <router-link to="">關於我們</router-link>
            </li>
            <li>
              <router-link to="">隱私權政策</router-link>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <div class="title-wrap">
            <span class="h5 title">購物說明</span>
          </div>
          <ul class="link-list">
            <li>
              <router-link to="">付款與配送</router-link>
            </li>
            <li>
              <router-link to="">退換貨說明</router-link>
            </li>
            <li>
              <router-link to="">海外訂購</router-link>
            </li>
            <li>
              <router-link to="">常見問題</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright">
    Copyright Himi All Rights Reserved | Designed by Himi
  </div>
</template>

<style lang="sass">

</style>
