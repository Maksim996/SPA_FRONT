<template>
  <div v-if="links" class="group-list-btn">
    <div class="item" v-for="link in links">
      <router-link
        class="text-decoration-none"
        :to="link.route ? {name: link.route} : link.href"
      >
        <v-img
          contain
          max-height="150"
          max-width="250"
          :src="link.src"
        />
        <p class="font-weight-bold text-center text-uppercase text--secondary mt-2">
          {{ link.text }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinksBoxImg",
  props: ['links']
}
</script>

<style scoped>
  .group-list-btn {
    display: grid;
    /*grid-template-columns: 1fr 1fr 1fr;*/
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /*grid-template-rows: 1fr 1fr 1fr;*/
    grid-gap: 20px;
  }
  .group-list-btn .item:hover {
    box-shadow: 4px 2px 10px rgba(0,0,0,.3);
    transition: box-shadow 0.3s ease-in-out;
  }
  .group-list-btn .item {
    padding: 10px;
  }
  .group-list-btn .item p {
    padding: 0;
    margin: 0;
  }
</style>
