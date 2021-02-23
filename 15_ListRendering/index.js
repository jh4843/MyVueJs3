const VueApp = {
    data() { 
      return {
        names: [
          { message: 'Foo1' },
          { message: 'Bar1' }
        ],

        parentMessage: 'Parent',
        myItems: [
          { key:2, message: 'Foo2' },
          { key:1, message: 'Bar2' }
        ],

        myItems3: [
          { key:1, message: 'Foo3' },
          { key:2, message: 'Bar3' }
        ],

        myObject: {
          Jason: 'Father',
          Jin: 'Mother',
          Tom: 'Son'
        },

        myNumbers: [ 2, 1, 3, 5, 4 ],


        nextTodoId: 4
        
      }
    },

    computed: {
      evenNumbers: function () {
        return this.myNumbers.filter(function (number) {
          return number % 2 === 0
        })
      },

      sortedNumber: function () {
        return this.myNumbers.sort();
      }
    },

    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  }

  const app = Vue.createApp(VueApp)

  app.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title']
  })

  app.myItems.push({key:3, message: 'Koo2'})
  app.myItems.push({key:4, message: 'Zoo2'})

  //example1.myItems.shift()

  var t = app.myItems.pop()
  app.myItems3.push(t)

  app.mount('#example-1')