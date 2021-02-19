var vm = new Vue({
    el: '#app',
    data: {
        // with object
        isActive: false,
        hasError: false,

        // with array
        activeClass: 'active',
        errorClass: 'text-danger',

        activeColor: 'red',
        fontSize: 30,

        styleObject: {
            color: 'red',
            fontSize: '13px'
        },

        baseStyles: {
            color: 'red',
            fontSize: '19px'
        },

        overridingStyles: {
            color: 'yellow'
        }
      }
});

// with component
vm.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})
