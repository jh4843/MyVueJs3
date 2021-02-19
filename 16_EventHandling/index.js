var example1 = new Vue({
    el: '#example-1',
    data: {
      counter: 0,
      name: 'Vue.js'
    },

    methods: {
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
              event.preventDefault()
              alert('event is null')
            }
            alert(message)
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
      
  })