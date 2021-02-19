// index.js
var model = {
    message_a: "Great",
    message_b: "Nice"
};

//Object.freeze(model)                  // Freeze reactivity system

var vm = new Vue({
    el: '#app',
    data: model,

    // Init events & lifecycle

    beforeUpdate: function() {
        console.log("before Update")
    },

    // Init Injections

    created: function() {
        console.log("created")
    },

    beforeMount: function() {
        console.log("before Mount")
    },

    mounted: function() {
        console.log("mounted")
    },

    // Mounted & Data update
    beforeUpdate: function() {
        console.log("before update")
    },

    updated: function() {
        console.log("updated")
    },

    beforeDestroy: function() {
        console.log("before destroy")
    },

    destroyed: function() {
        console.log("destroyed")
    },
    
});

vm.message_a = "Test 1"                 // Reactive
vm.$data.message_b = "Test3"            // Reactive

vm.$watch('message_a', function (newValue, oldValue) {
    console.log("a is changed")
});

vm.b = "hi"                             // not reactive


