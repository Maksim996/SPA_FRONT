import { PASSPORT_TYPE, SEX_TYPE } from '@/utils/constants'

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
    GlobalGetOnlyNumberPhone(number, mask = [2,3,2,2], regExp = /^380/) {
      let n = String(number).replace(regExp,'');
      let num = '';
      mask.map((el,index)=> {
        let char = '';
        for(let i = 0; i < el; i++ ) char += n[i];
        n = n.slice(el, n.length);
        num += char;
        num += (index < mask.length - 1 ) ? '-': ''
      })
      return num
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
    GlobalArrayFlip(json){
      var ret = {};
      for(var key in json){
        ret[json[key]] = key;
      }
      return ret;
    },

    //First letter string uppercase
    // GlobalUcFirst(str) {
    //     if (!str) return str;
    //     return str[0].toUpperCase() + str.slice(1);
    // }

    GlobalChangeSex(type) {
      const sex = this.GlobalArrayFlip(SEX_TYPE);
      return sex[type]
    }
  },
}
