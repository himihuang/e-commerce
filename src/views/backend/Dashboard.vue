<template>
  <div class="dashboard">
    <Navabr />
    <RouterView />
  </div>
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

.dashboard
  font-family: 'Noto Serif TC', serif
  background-color: $color-secondary
  background-image: none
  position: relative
</style>
