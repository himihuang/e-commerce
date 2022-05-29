<template>
  <div class="progress-wrap">
    <div class="progress-item">
      <span
        class="mb-0"
        :class="{ 'color--text': step === 1 || step === 2 || step === 3 }"
      >
        1. 購物車
      </span>
      <svg
        width="72"
        height="38"
        viewBox="0 0 72 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :class="{ 'fill-text': step === 1 || step === 2 || step === 3 }"
          d="M39.1 0.100098C43.6 5.3001 46 11.7001 46.2 18.1001H0V20.1001H46.2C46 26.5001 43.6 32.7001 39.1 38.0001C48.6 27.0001 62.3 19.1001 71.9 19.1001C62.3 19.0001 48.6 11.1001 39.1 0.100098Z"
        />
      </svg>
    </div>
    <div class="progress-item">
      <span class="mb-0" :class="{ 'color--text': step === 2 || step === 3 }">
        2. 填寫資料
      </span>
      <svg
        width="72"
        height="38"
        viewBox="0 0 72 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :class="{ 'fill-text': step === 2 || step === 3 }"
          d="M39.1 0.100098C43.6 5.3001 46 11.7001 46.2 18.1001H0V20.1001H46.2C46 26.5001 43.6 32.7001 39.1 38.0001C48.6 27.0001 62.3 19.1001 71.9 19.1001C62.3 19.0001 48.6 11.1001 39.1 0.100098Z"
        />
      </svg>
    </div>
    <div class="progress-item">
      <span class="h4 mb-0" :class="{ 'color--text': step === 3 }">
        3. 確認訂單</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["step"],
};
</script>

<style lang="sass">

</style>
