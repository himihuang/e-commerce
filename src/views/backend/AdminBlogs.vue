<template>
  <blogModal
    ref="modal"
    :temp="temp"
    :isNew="isNew"
    @update-blog="updateblog"
  ></blogModal>
  <div class="cus-pt-lg cus-pb-lg">
    <div class="container">
      <div class="mb-4 d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-primary--fill w-30"
          @click="openModal(true, '')"
        >
          <span>新增文章</span>
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th width="30%">標題</th>
            <th width="20%">發佈時間</th>
            <th width="20%">作者</th>
            <th width="10%">是否發布</th>
            <th width="20%">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in blogs" :key="article.id">
            <td width="30%">
              <div class="img-wrap me-3">
                <img :src="article.image" alt="封面圖片" class="w-100" />
              </div>
              <span>{{ article.title }}</span>
            </td>

            <td width="30%">
              <span>{{ new Date(article.create_at).toISOString() }}</span>
            </td>
            <td width="10%">
              <span>{{ article.author }}</span>
            </td>

            <td width="10%">
              <span
                :class="[
                  { isEnabled: article.is_enabled },
                  {
                    isNotEnabled: !article.is_enabled,
                  },
                ]"
                >{{ article.isPublic ? "是" : "否" }}</span
              >
            </td>
            <td width="20%">
              <button
                type="button"
                class="btn-icon btn-edit me-3"
                @click="openModal(false, article)"
              >
                <i class="bi bi-pencil"></i>
              </button>
              <button
                type="button"
                class="btn-icon btn-delete"
                @click="deleteblog(article)"
              >
                <i class="bi bi-trash3"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import blogModal from "@/components/BlogModal.vue";
export default {
  components: {
    blogModal,
  },
  data() {
    return {
      blog: {},
      blogs: [],
      temp: {
        tags: [],
        isPublic: false,
      },
      isNew: false,
    };
  },
  methods: {
    updateblog() {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/articles`
        )
        .then((res) => {
          this.blogs = res.data.articles;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    deleteblog(blog) {
      this.$http
        .delete(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${blog.id}`
        )
        .then(() => {
          this.updateblog();
        });
    },
    openModal(status, blog) {
      if (status == true) {
        this.isNew = true;
      } else {
        this.isNew = false;
        this.$http
          .get(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${blog.id}`
          )
          .then((res) => {
            this.temp = res.data.article;
          });
      }
      this.$refs.modal.openModal();
    },
  },
  mounted() {
    this.updateblog();
  },
};
</script>

<style lang="sass"></style>
