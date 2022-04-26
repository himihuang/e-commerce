<template>
  <loading :active="isLoading"></loading>

  <div class="product">
    <div class="container cus-mb-lg cus-mt-lg">
      <div class="row content">
        <div class="col-12 col-md-6">
          <swiper
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="product-img"
          >
            <swiper-slide>
              <div class="img-wrap">
                <img :src="product.imageUrl" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide v-for="img in product.imagesUrl" :key="img">
              <div class="img-wrap">
                <img :src="img" alt="" />
              </div>
            </swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="product-thumbnail"
          >
            <swiper-slide>
              <div class="img-wrap">
                <img :src="product.imageUrl" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide v-for="img in product.imagesUrl" :key="img">
              <div class="img-wrap">
                <img :src="img" alt="" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="col-12 col-md-6">
          <div class="title-wrap">
            <h1>{{ product.title }}</h1>
          </div>
          <div class="price-wrap">
            <span class="h3 me-2">NT$ {{ product.price }} 元</span>
            <del>NT$ {{ product.origin_price }} 元</del>
          </div>
          <div class="des-wrap">
            <h5>商品描述</h5>
            <p>{{ product.description }}</p>
          </div>

          <div class="content-wrap">
            <h5>商品內容</h5>
            <p>{{ product.content }}</p>
          </div>

          <div class="num-select-wrap">
            <span class="me-3">數量</span>
            <div class="num-select">
              <select
                name=""
                id=""
                v-model="selectedNum"
                :selected="selectedNum"
              >
                <option value="0">0</option>
                <template :value="num" v-for="num in 20" :key="num">
                  <option :value="num">
                    {{ num }}
                  </option>
                </template>
              </select>
            </div>
          </div>

          <div class="btn-wrap product-card">
            <button
              class="btn btn-line w-100"
              type="button"
              @click="updateCart(product.id)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="products-wrap bgColor-primary--border">
      <div class="container">
        <div class="cart-title">
          <span class="h2">加購商品</span>
        </div>
        <div class="row row-cols-2 row-cols-md-4">
          <div
            class="col mb-4 color--white"
            v-for="product in products"
            :key="product.id"
          >
            <product :product-item="product"></product>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "@/libs/emitter";
import product from "@/components/ProductCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/free-mode/free-mode.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/thumbs/thumbs.scss";

export default {
  components: {
    product,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isLoading: true,
      id: "",
      product: {},
      products: [],
      selectedNum: 0,
      carts: [],
      modules: [FreeMode, Navigation, Thumbs],
      thumbsSwiper: null,
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products.slice(0, 4);
        });
    },
    getProduct() {
      this.id = this.$route.params.id;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${this.id}`
        )
        .then((res) => {
          this.product = res.data.product;
        });
    },
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
        });
    },
    updateCart(id) {
      this.carts.forEach((item) => {
        if (id === item.product.id) {
          const data = {
            product_id: item.product_id,
            qty: Number(this.selectedNum),
          };
          this.$http
            .put(
              `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
              { data: data }
            )
            .then(() => {
              emitter.emit("get-cart");
            });
        } else {
          this.$http
            .post(
              `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`
            )
            .then(() => {
              emitter.emit("get-cart");
            });
        }
      });
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
  mounted() {
    this.getProduct();
    this.getProducts();
    this.getCart();
    this.isLoading = false;
  },
};
</script>

<style lang="sass" scope="scoped">
@import '@/assets/sass/global.sass'



.img-wrap
  +img(100%)
  img
    width: 100%


.cart-title
  .h2
    color: $color--white
.product
  .content
    padding: $width*5
    background-color: rgba($color-primary--border, .6)
    color: $color--white
    .title-wrap
      margin-bottom: $width*5
    .price-wrap
      margin-bottom: $width*5
    .des-wrap
      margin-bottom: $width*3
    .content-wrap
      margin-bottom: $width*5
    .num-select-wrap
      margin-bottom: $width*10
      color: $color--white
      .num-select
        border-bottom: 1px solid $color--white
        select
          color: $color--white

//--**product-thumbnail**--//
.product-thumbnail
  padding-top: $width*3
  .swiper-slide
    cursor: pointer
    opacity: .5
  .swiper-slide.swiper-slide-thumb-active
    opacity: 1

.product-img
  .swiper-button-prev, .swiper-button-next
    color: $color--white
</style>
