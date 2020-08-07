<template>
<!--  <v-container-->
<!--    class="text-center"-->
<!--    fill-height-->
<!--    style="height: calc(100vh - 108px)"-->
<!--  >-->
<!--    <v-row align="center">-->
      <v-col>

        <div class="title_error primary--text">
          <span class="number_error headerCC--text">4</span>
          <v-icon class="icon_error">mdi mdi-alert-circle-outline</v-icon>
          <span class="number_error headerCC--text">4</span>
        </div>
        <div class="d-flex flex-column align-center">
          <p class="text_error">{{$t('m.PageDoesNotExist')}}</p>

          <v-btn
            to="/"
            color="headerCC"
            outlined
          >
            {{$t('t.GoToHome')}}
          </v-btn>
        </div>
      </v-col>
<!--    </v-row>-->
<!--  </v-container>-->
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>
<!--mdi-alert-circle-outline-->
<!--mdi-alert-outline-->
<!--mdi-comment-alert-outline-->
<!--mdi-alert-octagon-->
<style scoped>
  .title_error .number_error{
    font-size: 20rem;
    font-family: cursive;
  }
  .title_error{
    position: absolute;
    z-index: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    opacity: 0.1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon_error{
    font-size: 30rem;
    color: tomato;
  }
  .text_error{
    font-size: 30px;
    font-family: cursive;
  }
</style>
