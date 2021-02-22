const VueApp = {
  data() {
    return {
      message: 'Hello Vue.js!',
      inputMessage: 'Input Your Message'
    }
  },

  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}

Vue.createApp(VueApp).mount('#app')