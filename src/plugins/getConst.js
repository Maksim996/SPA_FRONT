import {MASK_PHONE, SEX_TYPE, PASSPORT_TYPE, PAGINATION, ROLES, CONSTANTS} from '@/utils/constants'

const CONSTS = {
  MASK_PHONE,
  SEX_TYPE,
  PASSPORT_TYPE,
  PAGINATION,
  ROLES,
  CONSTANTS,
};

export default {
  install(Vue, options) {
    Vue.prototype.$getConst = (key) => {
      return CONSTS[key]
    }
  }
};
