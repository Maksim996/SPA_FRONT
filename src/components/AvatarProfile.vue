<template>
  <div class="avatar_card" >
    <v-row style="display: block">
      <v-parallax
        dark
        height="200"
        :src="background"
      >

      </v-parallax>
    </v-row>
    <v-row class="avatar_block">
      <v-avatar
        class="profile rounded-circle"
        color="grey"
        size="200"
        tile
      >
        <v-img :src="avatarData"></v-img>
      </v-avatar>
      <v-col class="pt-5">
        <v-list-item
          color="rgba(0, 0, 0, .4)"
          dark
        >
          <v-list-item-content>
            <v-list-item-title class="title text-h5">{{second_name}} {{first_name}} {{patronymic}}</v-list-item-title>
            <v-list-item-subtitle class="white--text text-h6">{{rules}} {{avatar}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: "AvatarProfile",
    data(){
      return {
        avatarData: ''
      }
    },
    props: {
      first_name: {
        type: String,
        default: '',
      },
      second_name: {
        type: String,
        default: '',
      },
      patronymic: {
        type: String,
        default: '',
      },
      rules: {
        type: String,
        default: '',
      },
      sex: {
        type: Number,
        default: 0,
      },
      avatar: {
        type: String,
      },
      background: {
        type: String,
        default: 'images/default/background.jpg',
      },
    },
    mounted() {
      this.avatarData = this.avatar || `images/default/Avatar${this.sex ? 'Man' : 'Woman'}.png`
    }
  }
</script>

<style scoped>
  .avatar_card {
    position: relative;
  }
  .avatar_block {
    position: absolute;
    top: 35%;
    left: 40px;
  }
  @media (max-width: 998px) {
    .avatar_block {
      position: absolute;
      top: 0%;
      left: 20px;
    }
  }
</style>
