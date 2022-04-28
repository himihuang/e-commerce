<template>
  <loading :active="isLoading"></loading>

  <div class="mt-navbar-lg">
    <div class="container">
      <div
        class="row blog blog-item"
        v-for="(blog, idx) in blogs"
        :key="blog.id"
      >
        <div class="col-12 col-md-6">
          <div class="img-wrap">
            <img :src="blog.image" :alt="`封面圖片-${idx}`" />
          </div>
        </div>

        <div class="col-12 col-md-6 content">
          <div class="title-area">
            <h2 class="date">
              {{ getDate(blog) }}
            </h2>
            <h5 class="title">{{ blog.title }}</h5>
          </div>
          <div class="txt-area">
            {{ blog.description }}
          </div>
          <div class="btn-wrap mt-4">
            <router-link
              :to="`/Blog/${blog.id}`"
              type="button"
              class="btn btn-text"
            >
              See More
              <div class="circle"></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      isLoading: true,
    };
  },
  methods: {
    getDate(blog) {
      return new Date(blog.create_at).toISOString().split("T")[0];
    },
    getBlogs(page = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles/?page=${page}`
        )
        .then((res) => {
          this.blogs = res.data.articles;
        });
    },
  },
  mounted() {
    this.getBlogs();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/global.sass'
</style>
