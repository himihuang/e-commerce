<template>
  <div
    class="modal fade"
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
            <span>訂單細節</span>
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
              <h4 class="mb-3">訂單編號</h4>

              <div class="row gx-2">
                <div class="col-md-6">
                  <h6>訂單編號</h6>
                  <p>{{ order.id }}</p>
                </div>
                <div class="col-md-6">
                  <h6>下單時間</h6>
                  <p>{{ new Date(order.create_at * 1000) }}</p>
                </div>
                <div class="col-md-6">
                  <h6>付款狀態</h6>
                  <p>
                    <span class="me-4">
                      {{ order.is_paid ? "已付款" : "未付款" }}
                    </span>
                    <label class="switch">
                      <input type="checkbox" v-model="order.is_paid" />
                      <span class="controler"></span>
                    </label>
                  </p>
                </div>
                <div class="col-md-6">
                  <h6>總金額</h6>
                  <p>{{ order.total }}</p>
                </div>
              </div>

              <hr />
              <h4 class="mb-3">購買商品</h4>
              <div class="row gx-2">
                <div class="col-md-4">
                  <h5 class="mb-3">商品名稱</h5>
                </div>
                <div class="col-md-4">
                  <h5>單位</h5>
                </div>
                <div class="col-md-4">
                  <h5>價錢</h5>
                </div>
              </div>
              <div
                class="row gx-2"
                v-for="product in order.products"
                :key="product.id"
              >
                <div class="col-md-4">
                  <p>{{ product.product.title }}</p>
                </div>
                <div class="col-md-4">
                  <p>{{ product.product.unit }}</p>
                </div>
                <div class="col-md-4">
                  <p>{{ product.total }}</p>
                </div>
              </div>

              <hr />

              <h4 class="mb-3">用戶資料</h4>
              <div class="row gx-2">
                <div class="col-md-6">
                  <label for="description" class="form-label">姓名</label>
                  <p>{{ order?.user?.name }}</p>
                </div>
                <div class="col-md-6">
                  <label for="description" class="form-label">信箱</label>
                  <p>{{ order?.user?.email }}</p>
                </div>
                <div class="col-md-6">
                  <label for="description" class="form-label">電話</label>
                  <p>{{ order?.user?.tel }}</p>
                </div>
                <div class="col-md-6">
                  <label for="description" class="form-label">地址</label>
                  <p>{{ order?.user?.address }}</p>
                </div>
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
            @click="updataOrder(order)"
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
  props: ["order"],
  data() {
    return {
      is_paid: this.order.is_paid,
      modal: {},
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    updataOrder(order) {
      this.$http
        .put(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${order.id}`,
          { data: this.order }
        )
        .then(() => {
          this.$emit("update-order");
          this.closeModal();
        })
        .catch((err) => {
          this.$swal(`${err.response.data.message}`);
        });
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>

<style lang="sass">

</style>
