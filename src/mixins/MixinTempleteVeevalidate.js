export default {
  methods: {
    F_ERROR_TEMPLETE(message, title= this.$t('m.Error')) {
      return `
      <div class="_vue-flash-msg-body__icon v-icon mdi mdi-alert-outline error--text">
        <img src="mdi-alert-outline" alt="" loading="lazy"></div>
        <div class="_vue-flash-msg-body__content">
            <h3>${title}</h3>
            <ul>
                ${message}
            </ul>
        </div>
      `
    },
    GET_ARRAY_DATA_MESSAGES(data) {
      let messages = '';

      for(let e in data) {
        messages += '<li>' + data[e] + '</li>'
      }
      return messages + '<br>'
    }
  }
}
