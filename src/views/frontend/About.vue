<template>
  <div class="about">
    <div class="mt-navbar-lg">
      <div class="container">
        <div class="row cus-pb-lg cus-pt-lg">
          <div class="col-12 col-md-5">
            <div class="title-wrap color--white cus-mb-lg">
              <span class="display-2"> About</span>
              <span class="h3">關於我們</span>
            </div>
            <h2 class="cus-blockquote color--white">你的美麗，由你自己作主</h2>
            <div class="content color--white cus-pt-lg">
              <p>
                的兩情！著看陽就過！推對入裡個……而大還雙輕動發得我會到。例是共團準當，雨客也社對準離三到；上做聽的電至目數發議有研投、民上為……人林會自，正為了了取問，達地中！
              </p>
              <p>
                團醫格夫件方社治起企的理說他運不：軍大軍白內作花表會來業的、開並許取不名家法學當選傳使。
              </p>
            </div>
          </div>
          <div class="col-12 col-md-7 right-part">
            <div class="img-outer">
              <div class="img-wrap">
                <div class="img"></div>
              </div>
            </div>
            <div class="img-outer-sm" id="img-outer-sm" ref="img_outer_sm">
              <div class="img-wrap">
                <div class="img"></div>
              </div>
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
    return {};
  },
  methods: {
    scrollHandler() {
      //scrollbar 高度
      let pageYOffset = window.pageYOffset;
      let windowHeight = window.innerHeight;

      //物件本身高度
      let box1OffsetHeight = this.$refs.img_outer_sm.offsetHeight;

      //將物件在網頁的高度設定為0，scrollTop - 物件在網頁的高度

      let pageHeight = Math.max(
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.scrollHeight,
        document.body.offsetHeight
      );
      let windowTop = pageYOffset - (windowHeight - pageHeight * 0.1);

      let percent = windowTop / pageHeight;

      if (windowTop > 0) {
        const totalOffset =
          -50 - ((percent * box1OffsetHeight) / box1OffsetHeight) * 100;
        this.$refs.img_outer_sm.style.transform = `translateY(${totalOffset}%)`;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.scrollHandler);

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>

<style lang="sass" scope="scoped">
@import '@/assets/sass/global.sass'

.cus-blockquote
  position: relative
  padding-left: $width*2
  &:before
    content: ''
    display: block
    width: $width*10
    height: $width*10
    position: absolute
    top: 50%
    left: 0
    transform: translateY(-50%)
    background-color: $color-primary--text
    z-index: -1


// -----**about**------//
.about
  .right-part
    position: relative

  .img-wrap
    +img(133%)
    .img
      width: 100%
      height: 100%
      position: absolute
      top: 0
      right: 0

  .img-outer
    width: 66%
    margin-right: 0
    margin-left: auto
    .img
      background-image: url('~@/assets/img/about-img.png')
      background-size: auto 100%
      background-attachment: fixed
      background-position: right


  .img-outer-sm
    width: 50%
    margin-right: auto
    margin-left: 0
    position: absolute
    top: 50%
    transform: translateY(-50%)
    border-radius: 500px 0 0 0
    overflow: hidden

    .img
      background-image: url('~@/assets/img/about-img-2.png')
      background-repeat: no-repeat
      background-size: 100% auto
      background-position: center
</style>
