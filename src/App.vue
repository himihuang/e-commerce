<template>
  <RouterView />
</template>
<script>
export default {};
</script>
<style lang="sass">
@import "bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap');
@import "./assets/sass/app.sass";

$width: 8px

$color--white: #fff
$color-primary--text: #897B62
$color-primary: #B8AC97
$color-secondary: #FEFBF5


ul
  list-style: none
  padding-left: 0

a
 text-decoration: none
 color: $color-primary--text
 &:hover
   color: $color-primary--text
</style>
