<template>
  <div class="product">
    <div class="container product cus-mb-lg cus-mt-lg">
      <div class="row content">
        <div class="col-12 col-md-6">
          <div class="img-wrap">
            <img :src="product.imageUrl" alt="" />
          </div>
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
              <select name="" id="">
                <option :value="num" v-for="num in 20" :key="num">
                  {{ num }}
                </option>
              </select>
            </div>
          </div>

          <div class="btn-wrap product-card">
            <button class="btn btn-line w-100" type="button">加入購物車</button>
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
import product from "@/components/ProductCard.vue";

export default {
  components: {
    product,
  },
  data() {
    return {
      id: "",
      product: {},
      products: [],
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
  },
  mounted() {
    this.getProduct();
    this.getProducts();
  },
};
</script>

<style lang="sass" scope="scoped">
@import '@/assets/sass/global.sass'

.product
  margin-top: $width*20
  @include pad
    margin-top: $width*15


.img-wrap
  width: 100%
  height: 0
  padding-bottom: 100%
  overflow: hidden
  img
    width: 100%


.cart-title
  .h2
    color: $color--white

.content
  padding: $width*5
  background-color: rgba($color-primary--border, .5)
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
</style>
