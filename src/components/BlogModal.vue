<template>
  <!-- Modal -->
  <div
    class="modal fade productModal"
    id="productModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增文章</span>
            <span v-if="!isNew">編輯文章</span>
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
                  v-model="temp.title"
                />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="mb-3">
                <label for="description" class="form-label">文章內容</label>
                <input
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入內容簡介"
                  v-model="temp.description"
                />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="mb-3">
                <label for="image" class="form-label">封面圖片</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片網址"
                  v-model="temp.image"
                />
                <img :src="temp.image" alt="" class="img-fluid" />
              </div>
            </div>

            <div class="col-sm-12">
              <div class="mb-3">
                <label for="image" class="form-label">標籤</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入標籤"
                  v-model="selectTag"
                  @keyup.enter="addTags(selectTag)"
                />
                <div>
                  <span v-for="tag in tags" :key="tag + 1">{{ tag }} 、</span>
                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <div class="mb-3">
                <label for="author" class="form-label">作者姓名</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  placeholder="請輸入作者姓名"
                  v-model="temp.author"
                />
              </div>
            </div>

            <div class="col-sm-12">
              <div class="mb-3">
                <label for="content" class="form-label">文章內容</label>
                <ckeditor
                  class="form-control"
                  placeholder="請輸入內容"
                  v-model="temp.content"
                  :editor="editor"
                  :config="editorConfig"
                >
                </ckeditor>
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="isPublic"
                    v-model="temp.isPublic"
                  />
                  <label class="form-check-label" for="isPublic">
                    是否啟用
                  </label>
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
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary--fill w-30"
            @click="updateBlog"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/src/modal.js";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MyUploadAdapter from "@/libs/myUploadAdaptor";

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    // Configure the URL to the upload script in your back-end here!
    return new MyUploadAdapter(loader);
  };
}

export default {
  props: ["temp", "isNew"],
  data() {
    return {
      modal: {},
      tags: [],
      selectTag: "",
      // 參考：https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html#editor
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ["heading", "typing", "bold", "italic", "|", "link"],
        extraPlugins: [MyCustomUploadAdapterPlugin],
      },
    };
  },
  methods: {
    addTags(item) {
      this.tags.push(item);
    },
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    updateBlog() {
      const time = new Date().getTime();
      const data = {
        title: this.temp.title,
        description: this.temp.description,
        image: this.temp.image,
        tag: this.tags,
        create_at: time,
        author: this.temp.author,
        isPublic: this.temp.isPublic,
        content: this.temp.content,
      };
      if (this.isNew) {
        this.$http
          .post(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article`,
            { data: data }
          )
          .then(() => {
            this.$emit("update-blog", data);
            this.closeModal();
          })
          .catch((err) => {
            this.$swal(`${err.response.data.message}`);
          });
      } else {
        this.$http
          .put(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${this.temp.id}`,
            { data: data }
          )
          .then(() => {
            this.$emit("update-blog");
            this.closeModal();
          })
          .catch((err) => {
            this.$swal(`${err.response.data.message}`);
          });
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
