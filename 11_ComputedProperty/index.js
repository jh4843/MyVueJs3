const VueApp = {
  data() {
    return {
      message: 'Hello',

      firstName: 'Foo',
      lastName: 'Bar',

      watchfullName: 'Foo Bar'
    }
  },

  computed: {

    now() {
      return Date.now()
    },

    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.watchfullName.split('').reverse().join('')
    },

    fullName: {

      get: function() {
        return this.firstName + ' ' + this.lastName
      },

      set: function(newVal) {
        var names = newVal.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },

  watch: {
      firstName: function (val) {
        this.watchfullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.watchfullName = this.firstName + ' ' + val
      }
  },
  
  methods: {
      methodnow: function () {
          return Date.now()
      }
  },
}


const vm = Vue.createApp(VueApp).mount('#computedproperty-example')
