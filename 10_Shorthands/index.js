// index.js

const VueApp = {
    data() {
      return {
        url: "https://www.w3schools.com/tags/tag_a.asp",
        key: "href",
        event: "click",
      }
    },

    methods: {
        doSomething: function(ev) {
            alert('Hello' + ev.target.tagName)
            console.log("do something!!")
        }
    },
  }
  
const vm = Vue.createApp(VueApp).mount('#app')
