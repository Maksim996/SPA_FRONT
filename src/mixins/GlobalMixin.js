export default {
  methods:{
    GlobalMixinGoToPath(name, query, option) {
      if (option === '_blank') {
        let link = this.router.resolve({name,query});
        window.open(link.href, '_blank');
      }
      else {
        this.router.resolve({name,query});
      }

    }
  },
}
