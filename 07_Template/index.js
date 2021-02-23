// index.js
var model = {
    message_a: "Great",
    message_b: "Nice",
    isButtonDisabled: false
};

const VueApp = {
    data() {
      return model
    }
}

  
const app = Vue.createApp(VueApp).mount('#templat-app')

app.message_a = "Test1"            // Reactive
app.message_b = "Test3"            // Reactive
 