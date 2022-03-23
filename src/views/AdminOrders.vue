<template>
  <div>
    <orderModal
      ref="modal"
      :order="order"
      @update-order="getOrders"
    ></orderModal>
    <div class="container">
      <div class="cus-mt-lg cus-mb-lg">
        <table>
          <thead>
            <tr>
              <th width="30%">訂單號碼</th>
              <th width="25%">購買時間</th>
              <th width="10%">金額</th>
              <th width="20%">是否付款</th>
              <th width="15%">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td width="30%">
                <span>{{ order.id }}</span>
              </td>
              <td width="25%">
                <span>{{ new Date(order.create_at * 1000) }}</span>
              </td>
              <td width="10%">
                <span>{{ order.total }}</span>
              </td>
              <td width="20%">
                <label class="switch">
                  <input
                    type="checkbox"
                    :checked="order.is_paid"
                    @change="changePaid(order)"
                  />
                  <span class="controler"></span>
                </label>
              </td>
              <td width="15%">
                <button
                  type="button"
                  class="btn-icon btn-edit me-3"
                  @click="openModal(order)"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  type="button"
                  class="btn-icon btn-delete"
                  @click="deleteOrder(order)"
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import orderModal from "@/components/OrderModal";
export default {
  components: {
    orderModal,
  },
  data() {
    return {
      orders: [],
      order: {
        products: [],
        user: {},
      },
      product: {
        imagesUrl: [],
      },
      isEdit: false,
    };
  },
  watch: {
    order(newVal) {
      return newVal;
    },
  },
  methods: {
    getOrders() {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/orders`
        )
        .then((res) => {
          this.orders = res.data.orders;
        });
    },
    changePaid(order) {
      this.$http
        .put(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${order.id}`,
          { data: order }
        )
        .then(() => {
          order.is_paid = !order.is_paid;
        });
    },
    openModal(order) {
      this.order = order;
      this.$refs.modal.openModal();
    },
    deleteOrder(order) {
      this.$http
        .delete(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${order.id}`
        )
        .then(() => {
          this.getOrders();
        });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>

<style lang="sass">

@import '@/assets/sass/global.sass'
</style>
