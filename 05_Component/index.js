const VueApp = {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ],

      posts: [
        { id: 2, title: 'My journey with Vue' },
        { id: 3, title: 'Blogging with Vue' },
        { id: 1, title: 'Why Vue is so fun' }
      ],
      //
      postFontSize: 1,
      //
      modelValue: '',
      //
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']

    }
  },

  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },

  methods: {
    onAlarmText(alarmContent) {
      alert(alarmContent)
    }
  }
}

const app = Vue.createApp(VueApp)

app.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },

  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>
    `
})

app.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})

app.component('blog-post', {
  props: ['title'],
  template: `
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlargeText')">
      Enlarge text
    </button>
    <button @click="$emit('alert-event', title)">
      AlertEvent
    </button>
  </div>
  `
})

app.component('custom-input', {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `
    <input v-model="value">
  `,
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
})

app.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

////

app.component('tab-home', {
  template: `<div class="demo-tab">Home component</div>`
})
app.component('tab-posts', {
  template: `<div class="demo-tab">Posts component</div>`
})
app.component('tab-archive', {
  template: `<div class="demo-tab">Archive component</div>`
})


app.mount('#component-example')