const VueApp = {
    data() { 
      return {
        parentMessage: 'Parent',

        items: [
          {id: 1, message: 'Foo' }, 
          {id: 2, message: 'Bar' },
          {id: 3, message: 'Json' },
          {id: 5, message: 'Mary' },
          {id: 4, message: 'Tom' },
        ],

        myObject: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        }
      }
    },

    methods: {

      orderedItems: function (o) {
        // `this` points to the vm instance
        return Object.keys(o).sort();
      },
    }
  }

  const app = Vue.createApp(VueApp)

  app.mount('#array-rendering')

  Vue.createApp({
    data() {
      return {
        myObject: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        }
      }
    }
  }).mount('#v-for-object')


const templateApp = Vue.createApp({
    data() {
      return {
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Do the dishes'
          },
          {
            id: 2,
            title: 'Take out the trash'
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        nextTodoId: 4
      }
    },
    methods: {
      addNewTodo() {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })
  
  templateApp.component('todo-item', {
    template: `
            <li>
              {{ title }}
              <button v-on:click="$emit('remove')">Remove</button>
            </li>
          `,
    props: ['title'],
    emits: ['remove']
  })
  
  templateApp.mount('#todo-list-example')