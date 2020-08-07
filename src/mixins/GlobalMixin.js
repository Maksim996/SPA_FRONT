export default {
  data() {
    return {
      GlobalTypePatient: 'Patient',
      GlobalTypePersonnel: 'Personnel',
      GlobalMaskPhone: process.env.VUE_APP_MASK_PHONE,
    }
  },
  methods:{
    GlobalMixinGoToPath(name, query, option) {
      if (option === '_blank') {
        let link = this.$router.resolve({ name, query });
        window.open(link.href, '_blank');
      }
      else {
        this.$router.push({ name, query }).catch(()=>{});
      }
    },
    GlobalGetNumberPhone(number) {
      return number.replace(/[^\d]/g, '');
    },
    GlobalGetOldPassport(val, separator = '-') {
      let arr = val.split('-');
      return arr.shift() + '-' + arr.join('');
    },
  },
}
