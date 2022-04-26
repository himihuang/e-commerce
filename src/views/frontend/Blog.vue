<template>
  <loading :active="isLoading"></loading>

  <div class="container cus-mb-lg cus-mt-lg">
    <div class="row">
      <div class="col-12 col-md-8 offset-0 offset-md-2 blog">
        <div class="content">
          <div class="title-area mb-4">
            <h2 class="date">
              {{ date }}
            </h2>
            <h5 class="title">{{ blog.title }}</h5>
          </div>
          <div class="img-wrap">
            <img :src="blog.image" alt="" />
          </div>
          <div class="txt-area" v-html="blog.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,

      blog: {},
      id: "",
      date: "",
    };
  },
  methods: {
    getBlog() {
      this.id = this.$route.params.id;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/article/${this.id}`
        )
        .then((res) => {
          console.log(res);
          this.blog = res.data.article;
          this.date = new Date(this.blog.create_at).toISOString().split("T")[0];
        });
    },
  },
  mounted() {
    this.getBlog();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/global.sass'
</style>
