// index.js
var model = {
    message_a: "Great",
    message_b: "Nice",
    isButtonDisabled: false
};

//Object.freeze(model)                  // Freeze reactivity system

var vm = new Vue({
    el: '#app',
    data: model,
});

vm.message_a = "Test1"                 // Reactive
vm.message_b = "Test3"            // Reactive
