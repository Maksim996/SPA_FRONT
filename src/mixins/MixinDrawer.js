export default {
  computed: {
    drawer: {
      get() {
        return this.$store.getters['drawer'];
      },
      set(value) {
        this.$store.dispatch('drawer', value);
      },
    },
  },
};
