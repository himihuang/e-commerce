<template>
  <Navabr></Navabr>
  <router-view />
</template>

<script>
import Navabr from "@/components/DashboardNavbar.vue";
export default {
  components: {
    Navabr,
  },
  data() {
    return {};
  },
};
</script>

<style lang="sass" scope="scoped">
@import '@/assets/sass/global.sass'

body
  font-family: 'Noto Serif TC', serif
  background-color: $color-secondary
  background-image: none
  position: relative
  z-index: 1
</style>
