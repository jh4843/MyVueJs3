// index.js

const VueApp = {
    data() {
      return {
        url: "https://www.w3schools.com/tags/tag_a.asp"
      }
    }
  }
  
const vm = Vue.createApp(VueApp).mount('#app')
