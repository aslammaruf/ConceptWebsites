<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
@import "./assets/css/reset.css";

html{
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

body{
  letter-spacing: 0.1em;
  font-size: 1em;
  line-height: 1.6;
  color: #1c1c1c;
}

.wrapper{
  max-width: 80%;
  margin: 0 auto !important;
}


</style>
