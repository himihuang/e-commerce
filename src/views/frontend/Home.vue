<template>
  <loading :active="isLoading"></loading>

  <div class="home">
    <div class="banner">
      <swiper
        :loop="true"
        :slidesPerView="'2'"
        :spaceBetween="0"
        :effect="'coverflow'"
        :grabCursor="false"
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
        <swiper-slide v-for="(item, idx) in products" :key="item.id">
          <router-link :to="`/product/${item.id}`">
            <div class="display-2 color--white text">Shine & Beautiful</div>
            <div class="img-wrap">
              <img :src="item.imageUrl" :alt="`banner圖片-${idx}`" />
            </div>
          </router-link>
          <div class="circle"></div>
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
                    class="col mb-4 wow animate__animated animate__fadeInLeft"
                    v-for="(item, idx) in collection"
                    :key="item.id"
                  >
                    <router-link
                      :to="`/product/${item.id}`"
                      class="collection-item"
                      v-if="idx < 2"
                    >
                      <div class="img-wrap">
                        <img :src="item.imageUrl" alt="商品圖片" />
                      </div>
                      <div class="btn btn-primary--fill">
                        <span>查看更多</span>
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
                <img :src="collection[0]?.imageUrl" alt="商品圖片" />
              </div>
            </div>
            <div class="btn-wrap mt-4">
              <router-link
                :to="`/Products/${collection[0]?.category}`"
                type="button"
                class="btn btn-text"
              >
                View All
                <div class="circle"></div>
              </router-link>
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
                <img :src="collection2[0]?.imageUrl" alt="商品圖片" />
              </div>
            </div>
            <div class="btn-wrap mt-4">
              <router-link
                :to="`/Products/${collection2[0]?.category}`"
                type="button"
                class="btn btn-text"
              >
                View All
                <div class="circle"></div>
              </router-link>
            </div>
          </div>
          <div class="col-md-8 order-12 order-md-1 main">
            <div class="row justify-content-center">
              <div class="col-10">
                <div class="display-2 color--white cus-mb-lg cus-mt-lg">
                  Classic Collection
                </div>

                <div class="row row-cols-2">
                  <div
                    class="col mb-4 wow animate__animated animate__fadeInRight"
                    v-for="(item, idx) in collection2"
                    :key="item.id"
                  >
                    <router-link
                      :to="`/Products/${item.id}`"
                      class="collection-item"
                    >
                      <div class="img-wrap" v-if="idx < 2">
                        <img :src="item.imagesUrl" alt="商品圖片" />
                      </div>
                      <div class="btn btn-primary--fill">
                        <span>查看更多</span>
                      </div>
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
            class="col mb-4 wow animate__animated animate__fadeInUp"
            v-for="product in newProducts"
            :key="product.id"
          >
            <product
              :product-item="product"
              @toggle-favorite="toggleFavorite"
              :favorite="favorite"
            ></product>
          </div>
        </div>
        <div class="btn-wrap text-center mt-4">
          <button type="button" class="btn btn-text">
            View All
            <div class="circle"></div>
          </button>
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
              class="category-item category-item--vertical mb-3 wow animate__animated animate__fadeInUp"
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
              class="category-item category-item--landscape mb-3 wow animate__animated animate__fadeInUp"
            >
              <div class="inner-border"></div>
              <div class="text-wrap">
                <div class="h5">{{ categorys[1] }}</div>
                <div class="h5"></div>
              </div>
            </router-link>

            <router-link
              :to="`/products/${categorys[2]}`"
              class="category-item category-item--fill mb-3 wow animate__animated animate__fadeInUp"
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
              class="category-item category-item--fill mb-3 wow animate__animated animate__fadeInUp"
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
      isLoading: true,
      modules: [Navigation, Pagination, EffectCoverflow],
      swiperOptions: [],
      products: [],
      collection: [],
      collection2: [],
      newProducts: [],
      categorys: [],
      favorite:
        JSON.parse(window.localStorage.getItem("toggle-favorite")) || [],
    };
  },
  methods: {
    toggleFavorite(item) {
      const favoriteId = this.favorite.findIndex((element) => element === item);
      if (favoriteId === -1) {
        this.favorite.push(item);
      } else {
        this.favorite.splice(favoriteId, 1);
      }
      window.localStorage.setItem(
        "toggle-favorite",
        JSON.stringify(this.favorite)
      );
    },
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products;

          this.products.forEach((item) => {
            if (item.category === "項鍊") {
              this.collection.push(item);
            }
            if (item.category === "耳環") {
              this.collection2.push(item);
            }
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
          this.collection = this.products[0];
        }
      });
    },
  },

  mounted() {
    this.getProducts();
    this.isLoading = false;
  },
};
</script>

<style lang="sass">

</style>
