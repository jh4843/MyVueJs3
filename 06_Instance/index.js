// index.js
var model = {
    message_a: "Great",
    message_b: "Nice"
};

//Object.freeze(model)                  // Freeze reactivity system

const VueApp = {
    data() {
        return model
    },

    beforeUpdate: function() {
        alert("before Update")
    },

    // Init Injections

    created: function() {
        alert("created")
    },

    beforeMount: function() {
        alert("before Mount")
    },

    mounted: function() {
        alert("mounted")
    },

    // Mounted & Data update
    beforeUpdate: function() {
        alert("before update")
    },

    updated: function() {
        alert("updated")
    },

    beforeDestroy: function() {
        alert("before destroy")
    },

    destroyed: function() {
        alert("destroyed")
    },
}
  
const app = Vue.createApp(VueApp).mount('#life-cycle-app')

app.message_a = "Test 1"                 // Reactive
app.$data.message_b = "Test3"            // Reactive

app.$watch('message_a', function (newValue, oldValue) {
    console.log("a is changed")
});

app.b = "hi"                             // not reactive


