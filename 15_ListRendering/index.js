var example1 = new Vue({
    el: '#example-1',
    data: {
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

      myTodos: [
        { isShow:false, message: '1' },
        { isShow:true, message: '2' },
        { isShow:true, message: '3' },
        { isShow:true, message: '4' },
        { isShow:true, message: '5' },
        { isShow:true, message: '6' },
        { isShow:false, message: '7' }
      ],

      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
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
  })

  Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title']
  })

  example1.myItems.push({key:3, message: 'Koo2'})
  example1.myItems.push({key:4, message: 'Zoo2'})

  //example1.myItems.shift()

  var t = example1.myItems.pop()
  example1.myItems3.push(t)

