import Vue from "vue";
import VueI18n from 'vue-i18n';
import ru from '@/lang/ru';

Vue.use(VueI18n);

export default new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE,
    messages: {
        ru
    }
})
