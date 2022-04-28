<template>
  <div
    class="modal fade productModal"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="!isEdit">新增產品</span>
            <span v-if="isEdit">編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-12">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model="product.title"
                />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入分類"
                    v-model="product.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入單位"
                    v-model="product.unit"
                  />
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    min="0"
                    placeholder="請輸入原價"
                    v-model="product.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    min="0"
                    placeholder="請輸入售價"
                    v-model="product.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入產品描述"
                  v-model="product.description"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入產品說明內容"
                  v-model="product.content"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="product.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
              <div class="mb-3">
                <label for="image" class="mb-2">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                  v-model="product.imageUrl"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="mb-2"
                  >或 上傳圖片
                  <!-- <i class="fas fa-spinner fa-spin"></i> -->
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="fileInput"
                  @change="uploadImage"
                />
              </div>
              <div class="thumbnail" v-if="product.imageUrl">
                <div class="img-wrap">
                  <img :src="product.imageUrl" alt="商品圖片" />
                </div>
              </div>
              <!-- 延伸技巧，多圖 -->
              <h5 class="mt-5">更多圖片</h5>
              <div class="img-group">
                <div
                  class="mb-3 thumbnail"
                  v-for="(image, idx) in product.imagesUrl"
                  :key="image + 123"
                >
                  <div class="img-wrap">
                    <img :src="image" :alt="`商品圖片-${idx}`" />
                  </div>
                  <button
                    type="button"
                    class="btn-delete w-100"
                    @click="this.product.imagesUrl.splice(idx, 1)"
                  >
                    X
                  </button>
                </div>
              </div>
              <div>
                <div class="mt-4">
                  <input
                    type="text"
                    class="form-control mb-2"
                    id="ManyImage"
                    placeholder="請輸入圖片連結"
                    v-model="imageInput"
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-secondary--border w-100"
                  @click="addImage"
                >
                  新增圖片
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary--border w-30"
            data-bs-dismiss="modal"
          >
            <span> 取消 </span>
          </button>
          <button
            type="button"
            class="btn btn-primary--fill w-30"
            @click="updateProduct"
          >
            <span> 確認 </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/src/modal.js";
export default {
  props: ["product", "isEdit"],
  data() {
    return {
      modal: {},
      imageInput: "",
      newProduct: {},
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    uploadImage() {
      let file = this.$refs.fileInput.files[0];
      let formData = new FormData();
      formData.append("file-to-upload", file);

      this.$http
        .post(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/upload`,
          formData
        )
        .then((res) => {
          this.product.imageUrl = "";
          if (this.product.imageUrl) {
            this.product.imageUrl = res.data;
          } else {
            this.product.imagesUrl.push(res.data.imageUrl);
          }
        });
    },
    updateProduct() {
      if (this.isEdit) {
        this.$http
          .put(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${this.product.id}`,
            { data: this.product }
          )
          .then(() => {
            this.$emit("update-product");
            this.closeModal();
          })
          .catch((err) => {
            this.$swal(`${err.response.data.message}`);
          });
      } else {
        this.$http
          .post(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product`,
            { data: this.product }
          )
          .then(() => {
            this.$emit("update-product");
            this.closeModal();
          })
          .catch((err) => {
            console.dir(err);
            this.$swal(`${err.response.data.message}`);
          });
      }
    },

    addImage() {
      if (this.imageInput) {
        this.product.imagesUrl.push(this.imageInput);
        this.imageInput = "";
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/global.sass'

.productModal
  .thumbnail
    width: 25%
    padding-right: $width
    img
      width: 100%
  .img-wrap
    width: 100%
    height: 0
    padding-bottom: 115%
    overflow: hidden
    img
      width: 100%

  .img-group
    display: flex
    flex-wrap: wrap

  .modal-header
    background-color: $color-primary--text
    color: $color--white
  .btn-close
    color: $color--white
</style>
