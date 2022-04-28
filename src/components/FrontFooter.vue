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
@import '@/assets/sass/global.sass'

.footer
  padding-top: $width*10
  padding-bottom: $width*10
  position: relative
  color: $color-primary--text
  overflow: hidden

  &:before
    content: ''
    display: block
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    filter: blur(4px)
    background-color: rgba($color--white,.6)
    z-index: 0
  .logo
    position: relative
    padding-left: $width*3
    padding-bottom: $width*5
    z-index: 1
  .title-wrap
    padding-bottom: $width*2
    .title
      position: relative
      padding-left: $width*4
      &:before
        content: ''
        display: block
        position: absolute
        top: 50%
        left: 0
        transform: translateY(-50%)
        width: $width*3
        height: $width*3
        background-image: url('/assets/img/footer-star.svg')
        background-position: center
        background-repeat: no-repeat
  .link-list
    li
      display: block
      position: relative
      padding-left: $width*4
      padding-bottom: $width
      &:before
        content: ''
        display: block
        position: absolute
        top: 50%
        left: 0
        transform: translateY(-50%)
        width: $width*2
        height: 1px
        background-color: $color-primary--text
        transition: all 1s ease
      &:hover:before
        left: $width
  .list
    li
      display: block
      position: relative
      padding-left: $width*4
      padding-bottom: $width

.copyright
  text-align: center
  background-color: $color-primary--text
  color: rgba($color--white, .8)
  font-size: .75rem
  padding-top: .5rem
  padding-bottom: .5rem
</style>
