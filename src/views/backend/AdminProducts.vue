<template>
  <div>
    <productModal
      ref="productModal"
      :id="product.id"
      :product="product"
      :is-edit="isEdit"
      @update-product="getProducts"
    ></productModal>
    <div class="cus-pt-lg cus-pb-lg">
      <div class="container">
        <div class="mb-4 d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-primary--fill w-30"
            @click="openModal('isNew', '')"
          >
            <span> 新增產品 </span>
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th width="30%">產品名稱</th>
              <th width="10%">分類</th>
              <th width="10%">原價</th>
              <th width="10%">售價</th>
              <th width="20%">是否啟用</th>
              <th width="20%">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, idx) in products" :key="product.id">
              <td width="30%">
                <div class="img-wrap me-3">
                  <img
                    :src="product.imageUrl"
                    :alt="`商品圖片-${idx}`"
                    class="w-100"
                  />
                </div>
                <span>{{ product.title }}</span>
              </td>
              <td width="10%">
                <span>{{ product.category }}</span>
              </td>
              <td width="10%">
                <span>{{ product.origin_price }}</span>
              </td>
              <td width="10%">
                <span>{{ product.price }}</span>
              </td>
              <td width="20%">
                <span
                  :class="[
                    { isEnabled: product.is_enabled },
                    { isNotEnabled: !product.is_enabled },
                  ]"
                  >{{ product.is_enabled ? "是" : "否" }}</span
                >
              </td>
              <td width="20%">
                <button
                  type="button"
                  class="btn-icon btn-edit me-3"
                  @click="openModal('isEdit', product)"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  type="button"
                  class="btn-icon btn-delete"
                  @click="deleteProduct(product)"
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="page-wrap cus-mt-lg">
          <pagination
            :pages="pagination"
            @get-product="getProducts"
          ></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productModal from "@/components/ProductModal.vue";
import pagination from "@/components/Pagination.vue";

export default {
  components: {
    productModal,
    pagination,
  },
  data() {
    return {
      products: {},
      product: {
        imagesUrl: [],
      },
      isEdit: false,
      pagination: {},
    };
  },
  methods: {
    openModal(state, product) {
      if (state == "isEdit") {
        this.product = { imagesUrl: [], ...product };
        this.isEdit = true;
      } else {
        this.product = {
          imagesUrl: [],
        };
        this.isEdit = false;
      }

      this.$refs.productModal.openModal();
    },
    getProducts(page = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
        )
        .then((res) => {
          this.products = res.data.products;
          // .map((p) => ({
          //   imagesUrl: [],
          //   ...p,
          // }));
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    deleteProduct(product) {
      this.$http
        .delete(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`
        )
        .then(() => {
          this.getProducts();
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="sass">
.page-wrap
  display: flex
  justify-content: center
</style>
