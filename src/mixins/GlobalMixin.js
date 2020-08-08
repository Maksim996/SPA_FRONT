import { PASSPORT_TYPE } from '@/utils/constants'

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
    GlobalGetSymbols(val, type = 'OnlySymbols', separator = '-') {
      let arr = val.split(separator);
      let results = '';
      switch (type) {
        case PASSPORT_TYPE.oldNumberPassport:
          results = (arr.shift() + '-' + arr.join(''));
          break;
        case 'OnlySymbols':
        case PASSPORT_TYPE.newNumberPassport:
          results = arr.join('');
          break;
      }

      return results
    },
  },
}
