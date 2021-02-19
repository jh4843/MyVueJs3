var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      inputMessage: 'Input Your Message'
    },

    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  });  
