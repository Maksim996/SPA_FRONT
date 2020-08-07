<template>
  <div class="d-flex flex-column align-center">
    <div class="text-h3 mt-4 text-center headerCC--text">
      Добро пожаловать
    </div>
    <v-col class="logo">
      <v-img v-if="logo" :src="logo"></v-img>
    </v-col>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    logo: '',
  }),
  mounted() {
    this.logo = process.env.VUE_APP_LOGO_AUTH
  }
}
</script>

<style scoped>
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    opacity: .05;
    width: 70%;
  }
  .home {
    height: 100%;
    background: linear-gradient(254deg, #0083ee, #71befd, #fd9771, #f05d27, #ffc40a);
    background-size: 1000% 1000%;

    -webkit-animation: AnimationName 23s ease infinite;
    -moz-animation: AnimationName 23s ease infinite;
    animation: AnimationName 23s ease infinite;
  }

  @-webkit-keyframes AnimationName {
    0%{background-position:0% 23%}
    50%{background-position:100% 78%}
    100%{background-position:0% 23%}
  }
  @-moz-keyframes AnimationName {
    0%{background-position:0% 23%}
    50%{background-position:100% 78%}
    100%{background-position:0% 23%}
  }
  @keyframes AnimationName {
    0%{background-position:0% 23%}
    50%{background-position:100% 78%}
    100%{background-position:0% 23%}
  }
</style>
