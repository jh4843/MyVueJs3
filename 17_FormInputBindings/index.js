// index.js
const HelloVueApp = {
    data() {
      return {
        message: 'Hello Vue!!',
        msg1: '',
        multilineMessage: 'sec-message',
        checked: false,
        checkedValue: '',
        checkedNames: [],
        picked: '',
        selected: '',
        multipleSelected: '',

        dynamicSelected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
      }
    }
  }
  
  Vue.createApp(HelloVueApp).mount('#form-input-binding')