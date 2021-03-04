const VueApp = {
  data() { 
    return {
      counter: 0,
      name: 'Vue.js'
    }
  },

  methods: {
    submit: function (event) {
      alert('Submit !! ')
    },
    
    onPageDown: function (event) {
      alert('page-down')
    },


    greet: function (event) {
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
      alert('Hello ' + this.name + '!')
      // `event` 는 네이티브 DOM 이벤트입니다
      if (event) {
        alert(event.target.tagName)
      }
    },

    warn: function (message, event) {
      // now we have access to the native event
      if (event) {
        alert('event is ' + event.name)
      }
      alert(message)
    },

    one(event) {
      alert('first')
    },
    two(event) {
      alert('second')
    },

    doThis: function (event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault()
        alert('event is null')
      }
      alert('do This')
    },

    onScroll: function (event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault()
        alert('event is null')
      }
      alert('onScroll')
    }
  }
}

const app = Vue.createApp(VueApp)
  
app.mount('#event-handling')
  
