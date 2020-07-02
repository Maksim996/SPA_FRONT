<template>
  <div class="home">
    <v-container
            fill-height
            >
      <v-row
              align="center"
              justify="center"
              style="height:90vh"
      >
        <v-col  lg="3" md="12">
          <v-row justify="center">
            <v-btn
                    x-large
                    color="success"
                    dark
                    to="/login"
            >
              <span class="mr-2">{{$t('t.loginIn')}}</span>
              <v-icon>mdi-login</v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col lg="3" md="12" >
          <v-row justify="center">
            <v-btn  x-large
                    color="primary"
                    dark
                    to="/register"
            >
              <span class="mr-2">{{$t('t.register')}}</span>
              <v-icon>mdi-account-multiple-plus</v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col lg="3" md="12" >
          <v-row justify="center">
            <v-btn  x-large
                    color="purple"
                    dark
                    to="/dashboard"
            >
              <span class="mr-2">Dashboard</span>
              <v-icon>mdi-view-dashboard-outline</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style scoped>
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