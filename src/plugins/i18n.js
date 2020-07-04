import Vue from "vue";
import VueI18n from 'vue-i18n';
import ru from '@/lang/ru';
import ua from '@/lang/ua';

Vue.use(VueI18n);

export default new VueI18n({
    locale: process.env.VUE_APP_LOCALE,
    messages: {
        ru, ua
    }
})
