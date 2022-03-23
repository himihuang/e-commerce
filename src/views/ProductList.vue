<template>
  <div class="productList">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3">
          <div class="select-wrap d-block d-lg-none w-100 color--white mb-4">
            <select class="cus-select color--white" v-model="selected">
              <option value="請選擇" disabled>請選擇</option>
              <option v-for="item in this.category" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="category-list d-none d-lg-block">
            <div class="category-title">
              <img src="../assets/shine.svg" class="dec-top" />
              <h5 class="title">分類</h5>
              <img src="../assets/shine.svg" class="dec-bottom" />
            </div>

            <div class="category-item" @click="getCategoryAll">
              <router-link to="/products/all">
                <img src="../assets/star.svg" class="me-2 star" />
                全部
              </router-link>
            </div>
            <div
              class="category-item"
              v-for="item in this.category"
              :key="item"
              @click="getCategoryItems(item)"
            >
              <router-link :to="`/products/${item}`">
                <img src="../assets/star.svg" class="me-2 star" />
                {{ item }}</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-9">
          <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
            <div
              class="col mb-4"
              v-for="product in products"
              :key="product.id"
              v-show="!categoryProducts.length"
            >
              <product :product-item="product"></product>
            </div>

            <div
              class="col mb-4"
              v-for="product in categoryProducts"
              :key="product.id"
              v-show="categoryProducts.length"
            >
              <product :product-item="product"></product>
            </div>
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
      products: [],
      cart: {},
      category: [],
      categoryProducts: [],
      selected: "請選擇",
    };
  },
  watch: {
    selected() {
      this.getCategoryItems();
    },
  },
  methods: {
    getProduct() {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products;
          this.products.forEach((item) => {
            if (!this.category.includes(item.category)) {
              return this.category.push(item.category);
            }
          });
        });
    },
    getCategoryAll() {
      this.categoryProducts = this.products;
    },
    getCategoryItems(category = this.selected) {
      this.categoryProducts = [];
      this.products.filter((item) => {
        if (category === item.category) {
          return this.categoryProducts.push(item);
        }
      });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/global.sass'

$width: 8px

$color--white: #fff
$color-primary--text: #897B62
$color-primary: #B8AC97
$color-secondary: #FEFBF5




.productList
  margin-top: $width*20
  @include pad
    margin-top: $width*15


// -----**btn**------//
.btn-line
  color: $color--white
  text-align: center
  border-top: 1px solid
  border-bottom: 1px solid
  padding-top: $width
  padding-bottom: $width
  position: relative
  transition: all 1s ease
  &:before
    content: ''
    display: block
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 0
    background-color: $color--white
    z-index: -1
    transition: all 1s ease
  &:hover
    color: $color-primary--text
    &::before
      height: 100%



.btn-primary--fill
  background-color: $color-primary--text
  color: $color--white

// **-----category------**//
.category-title
  text-align: center
  color: $color--white
  .title
    margin-top: 0.5rem
    margin-bottom: 0.5rem
  .dec-bottom
    transform: rotate(180deg)
.category-item
  color: $color--white
  padding: $width*2
  display: flex
  align-items: center
  cursor: pointer
  position: relative
  transition: all 1s ease
  a
    color: $color--white
    &:hover
      color: $color--white
  &:before
    content: ''
    display: block
    position: absolute
    left: 0
    bottom: 0
    height: $width/4
    width: 0
    background-color: $color--white
    transition: all 1s ease
  &:hover
    &:before
      width: 100%
    .star
      transform: rotate(30deg)

.category-list
  position: relative
  padding: $width*3
  &:before, &:after
    content: ''
    display: block
    width: 100%
    height: 100%
    position: absolute
    z-index: -1
  &:before
    top: 5px
    left: 5px
    border: 1px solid $color--white
    border-radius: 500px 500px 0 0
  &:after
    top: -5px
    left: -5px
    border: 1px solid $color--white
    border-radius: 500px 500px 0 0

// -----**form**------//

.cus-form-select
  border-bottom: 1px solid $color-primary--text
  position: relative
  &:after
    content: ''
    display: block
    position: absolute
    top: 50%
    right: 0
    transform: translateY(-50%)
    font-family: "Font Awesome 5 Free"
    font-weight: 900
    content: "\f078"
    z-index: -1
  select
    width: 100%
    appearance: none
    border: none
    background-color: transparent
    color: $color-primary--text
</style>
