<template>
  <div class="home">
    <div class="banner">
      <swiper
        :loop="true"
        :slidesPerView="'2'"
        :spaceBetween="0"
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :coverflowEffect="{
          rotate: 0,
          stretch: 10,
          depth: 600,
          modifier: 2,
          slideShadows: false,
        }"
        :navigation="{
          nextEl: '.arrow--next',
          prevEl: '.arrow--prev',
        }"
        :pagination="{
          type: 'fraction',
        }"
        :breakpoints="{
          769: {
            slidesPerView: 2,
            spaceBetween: 200,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 400,
              modifier: 2,
              slideShadows: false,
            },
          },
        }"
        :modules="modules"
        ref="mySwiper"
        v-if="products.length"
      >
        <swiper-slide v-for="item in products" :key="item.id">
          <div class="circle"></div>
          <div class="display-2 color--white text">Shine & Beautiful</div>
          <div class="img-wrap">
            <img :src="item.imageUrl" alt="" />
          </div>
        </swiper-slide>
        <div class="arrow--prev h4">Prev ——</div>
        <div class="arrow--next h4">—— Next</div>
      </swiper>
    </div>

    <div class="collection">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 main">
            <div class="row justify-content-center">
              <div class="col-10">
                <div class="title-wrap color--white cus-mb-lg cus-mt-lg">
                  <span class="display-2"> Classic Collection </span>
                </div>

                <div class="row row-cols-2">
                  <div
                    class="col mb-4"
                    v-for="image in colection.imagesUrl"
                    :key="image"
                  >
                    <router-link :to="`/product/${colection.id}`">
                      <div class="img-wrap">
                        <img :src="image" alt="" />
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 side">
            <div class="inner-border">
              <div class="img-wrap">
                <img :src="colection.imageUrl" alt="" />
              </div>
            </div>
            <div class="btn-wrap mt-4">
              <button type="button" class="btn btn-text">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="collection">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 order-1 order-md-12 side">
            <div class="inner-border">
              <div class="img-wrap">
                <img :src="colection2.imageUrl" alt="" />
              </div>
            </div>
            <div class="btn-wrap mt-4">
              <button type="button" class="btn btn-text">View All</button>
            </div>
          </div>
          <div class="col-md-8 order-12 order-md-1 main">
            <div class="row justify-content-center">
              <div class="col-10">
                <div class="display-2 color--white cus-mb-lg cus-mt-lg">
                  Classic Collection
                </div>

                <div class="row row-cols-2">
                  <div class="col mb-4">
                    <router-link :to="`/product/${colection2.id}`">
                      <template
                        v-for="image in colection2.imagesUrl"
                        :key="image"
                      >
                        <div class="img-wrap">
                          <img :src="image" alt="" />
                        </div>
                      </template>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="newProducts">
      <div class="container cus-mb-lg cus-mt-lg">
        <div class="title-block cus-mb-sm">
          <span class="h4 title">最新上架</span>
        </div>
        <div class="row row-cols-2 row-cols-lg-4">
          <div
            class="col mb-4"
            v-for="product in newProducts"
            :key="product.id"
          >
            <product :product-item="product"></product>
          </div>
        </div>
        <div class="btn-wrap text-center mt-4">
          <button type="button" class="btn btn-text">View All</button>
        </div>
      </div>
    </div>

    <div class="category">
      <div class="container cus-mb-lg cus-mt-lg">
        <div class="title-wrap color--white cus-mb-lg">
          <span class="display-2"> Category </span>
          <span class="h3">常用分類</span>
        </div>
        <div class="row">
          <div class="col-10 offset-1 col-md-4 offset-md-0">
            <router-link
              :to="`/products/${categorys[0]}`"
              class="category-item category-item--vertical mb-3"
            >
              <div class="inner-border"></div>
              <div class="text-wrap">
                <div class="h5">{{ categorys[0] }}</div>
                <div class="h5"></div>
              </div>
            </router-link>
          </div>
          <div
            class="col-10 offset-1 col-md-4 offset-md-0 middle-part group-part"
          >
            <router-link
              :to="`/products/${categorys[1]}`"
              class="category-item category-item--landscape mb-3"
            >
              <div class="inner-border"></div>
              <div class="text-wrap">
                <div class="h5">{{ categorys[1] }}</div>
                <div class="h5"></div>
              </div>
            </router-link>

            <router-link
              :to="`/products/${categorys[2]}`"
              class="category-item category-item--fill mb-3"
            >
              <div class="inner-border"></div>
              <div class="text-wrap">
                <div class="h5">{{ categorys[2] }}</div>
                <div class="h5"></div>
              </div>
            </router-link>
          </div>
          <div
            class="col-10 offset-1 col-md-4 offset-md-0 right-part group-part"
          >
            <router-link
              :to="`/products/${categorys[3]}`"
              class="category-item category-item--fill mb-3"
            >
              <div class="inner-border"></div>
              <div class="text-wrap">
                <div class="h5">{{ categorys[3] }}</div>
                <div class="h5"></div>
              </div>
            </router-link>
            <router-link
              :to="`/products/${categorys[4]}`"
              class="category-item category-item--landscape mb-3"
            >
              <div class="inner-border"></div>
              <div class="text-wrap">
                <div class="h5">{{ categorys[4] }}</div>
                <div class="h5"></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Navigation, Pagination, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/effect-coverflow/effect-coverflow.scss";

import product from "@/components/ProductCard.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    product,
  },
  data() {
    return {
      modules: [Navigation, Pagination, EffectCoverflow],
      swiperOptions: [],
      products: [],
      colection: {},
      colection2: {},
      newProducts: [],
      categorys: [],
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products;

          this.products.forEach(() => {
            this.colection = this.products[0];
            this.colection2 = this.products[1];
          });
          this.newProducts = this.products.filter((item, index, array) => {
            array.reverse();
            if (index <= 3) {
              return item;
            }
          });

          this.products.filter((item, index) => {
            if (index <= 4) {
              this.categorys.push(item.category);
            }
          });
        });
    },
    getCollections() {
      this.products.forEach(() => {
        if (this.products) {
          this.colection = this.products[0];
        }
      });
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/global.sass'


.title-block
  display: flex
  justify-content: center
  color: $color--white
  .title
    position: relative
    &:before
      content: ''
      display: block
      width: 100%
      height: $width*4
      position: absolute
      bottom: 100%
      left: 50%
      transform: translateX(-50%)
      background-image: url('../assets/shine.svg')
      background-size: cover
      background-position: center


.home
  margin-top: $width*20
  @include pad
    margin-top: $width*15

// -----**swiper**------//
.swiper
  width: 100%;
  padding-top: $width*10
  padding-bottom: $width*10
  position: relative
  &:before
    content: ''
    display: block
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%) scaleX(2) skewY(49deg)
    transform-origin: 50%
    width: 40%
    height: 40%
    border-radius: 50%
    border: 2px solid #fff
    z-index: -1
    animation: spin 5s infinite

@keyframes spin
  0%
    transform: translate(-50%, -50%) scaleX(2) skewY(45deg)

  50%
    transform: translate(-50%, -50%) scaleX(2) skewY(50deg)

  100%
    transform: translate(-50%, -50%) scaleX(2) skewY(45deg)


.swiper-slide
  background-position: center;
  background-size: cover;
  visibility: hidden

.swiper-slide
  .img-wrap
    width: 100%
    height: 0
    padding-bottom: 115%
    overflow: hidden
    img
      width: 100%


.swiper-slide.swiper-slide-active
  .img-wrap
    border-radius: 50% 50% 0 0

  position: relative
  .text
    position: absolute
    top: 50%
    left: -10%
    transform: translateY(-50%)
    @extend %text-shadow

  .circle
    width: 100%
    height: 100%
    position: absolute
    top: 0%
    left: 0%
    right: 0
    bottom: 0
    margin: auto
    border-radius: 50%
    border: 2px solid $color--white
    transform-style: preserve-3d;
    transform: rotateZ(67deg) rotateY(116deg);
    z-index: 2

    &:before
      content: ''
      display: block
      width: $width*5
      height: $width*5
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      margin: auto
      background-image: url('../assets/Star-1.svg')
      animation: move 6s linear infinite

    &:after
      content: ''
      display: block
      width: $width*5
      height: $width*5
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      margin: auto
      background-image: url('../assets/Star-1.svg')
      animation: circle 6s linear infinite


@keyframes circle
  0%
    transform: rotateZ(0) translateX(200px) rotateZ(0) rotateY(-70deg)
  100%
    transform: rotateZ(360deg) translateX(200px) rotateZ(-360deg) rotateY(-70deg)

@keyframes move
  0%
    transform: rotateZ(360deg) translateX(200px) rotateZ(-360deg) rotateY(-70deg)
  100%
    transform: rotateZ(0) translateX(200px) rotateZ(0) rotateY(-70deg)

  .img-wrap
    border-radius: 45% 45% 0 0

.arrow--prev
  position: absolute
  left: 32%
  right: auto
  top: 72%
  color: $color--white
  cursor: pointer
  @include pad
    left: 8%

.arrow--next
  position: absolute
  right: 32%
  left: auto
  top: 72%
  color: $color--white
  cursor: pointer
  @include pad
    right: 8%


.swiper-pagination-fraction
  bottom: 25%
  left: 0
  width: 100%
  color: $color--white
  z-index: 0
  @include pad
    bottom: 22%

.swiper-slide.swiper-slide-next .text,
.swiper-slide.swiper-slide-prev .text
  display: none

.swiper-slide.swiper-slide-next,
.swiper-slide.swiper-slide-active,
.swiper-slide.swiper-slide-prev
  visibility: visible


// -----**collection**------//

.collection
  display: flex
  flex-direction: row

  .img-wrap
    position: relative
    +img(115%)
    img
      width: 100%
      transition: all .5s

  .side
    padding: $width*15 $width*5
    background-image: url('../assets/bg-collection.png')
    background-size: cover
    position: relative
    @include pad
      padding: $width*10
    .btn-wrap
      display: flex
      justify-content: flex-end
      .btn-text
        z-index: 2

    &:after
      content: ''
      display: block
      @extend %absolute-fill
      background-color: rgba($color-primary, .8)
      z-index: 0

    .img-wrap
      border-radius: 0 100% 0 0
      z-index: 1

    .inner-border
      position: relative
      &:before
       content: ''
       display: block
       position: absolute
       left: -5%
       bottom: -5%
       width: 100%
       height: 100%
       border: 2px solid $color--white
       border-radius: 100% 0 0 0
       z-index: 5



// -----**category**------//


.category
  color: $color--white
  .category-item
    position: relative
    +img(75%)
    .text-wrap
      @extend %absolute-center
    .inner-border
      @extend %absolute-center
      height: 80%
      width: 80%
      border: $width/4 solid $color--white
    &:before
      content: ''
      display: block
      @extend %absolute-fill
      background-size: cover
      background-repeat: no-repeat


  .group-part
    display: flex
    flex-direction: column
    justify-content: space-between

  .middle-part
    .category-item--landscape
      &:before
        background-image: url('../assets/category-landscape-1.png')
      .inner-border
        border-radius: 100% 0 0 0

    .category-item--fill
      .inner-border
        border-radius: 50%
        &:before
          content: ''
          display: block
          width: 100%
          height: 100%
          @extend %absolute-center
          border-radius: 50%
          border: $width/4 solid $color--white
          transform: translate(-50%, -50%) rotate(15deg)

  .right-part
    .category-item--landscape
      &:before
        background-image: url('../assets/category-landscape-2.png')
      .inner-border
        border-radius: 0 100% 0 0

.category-item.category-item--vertical
  position: relative
  display: block
  +img(155%)
  .text-wrap
    @extend %absolute-center

  &:before
    content: ''
    display: block
    @extend %absolute-fill
    background-image: url('../assets/category-vertival.png')
    background-size: cover
    background-repeat: no-repeat


.category-item.category-item--fill
  &:before
    background-color: $color-primary
</style>
