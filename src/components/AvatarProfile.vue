<template>
  <div class="avatar_card" >
    <v-row style="display: block">
      <v-parallax
        dark
        height="200"
        :src="background"
      />
    </v-row>
    <v-row class="avatar_block">
      <v-avatar
        class="profile rounded-circle"
        color="grey"
        size="200"
        tile
      >
        <v-img :src="avatar"></v-img>
      </v-avatar>
      <v-col class="pt-5">
        <v-list-item
          color="rgba(0, 0, 0, .4)"
          dark
        >
          <v-list-item-content v-if="userProp && Object.keys(userProp).length">
            <v-list-item-title class="title text-h5">{{userProp.second_name}} {{userProp.first_name}} {{userProp.patronymic}}</v-list-item-title>
            <v-list-item-subtitle class="white--text text-h6">{{rules}}</v-list-item-subtitle>
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
        avatar: `images/default/AvatarMan.png`,
        background: 'images/default/background.jpg',
        rules: 'admin'
      }
    },
    props: ['userProp'],
    watch: {
      userProp(v) {
        if (v.image)
          this.avatar = v.image;
        if (v.background)
          this.background = v.background;
      },
    },
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
