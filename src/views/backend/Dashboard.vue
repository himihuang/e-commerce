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

</style>
