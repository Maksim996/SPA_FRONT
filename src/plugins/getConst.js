import {MASK_PHONE,
        SEX_TYPE,
        PASSPORT_TYPE,
        PAGINATION,
        ROLES,
        CONSTANTS,
        TEXT_EDITOR_TOOLBAR_USER
} from '@/utils/constants'

const CONSTS = {
  MASK_PHONE,
  SEX_TYPE,
  PASSPORT_TYPE,
  PAGINATION,
  ROLES,
  CONSTANTS,
  TEXT_EDITOR_TOOLBAR_USER,
};

export default {
  install(Vue, options) {
    Vue.prototype.$getConst = (key) => {
      return CONSTS[key]
    }
  }
};
