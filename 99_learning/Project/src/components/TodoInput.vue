<template>
    <div class="inputBox shadow">
        <input type="text" ref="newTodoItem" v-model="newTodoItem" 
          @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
        <!-- <button @click="addTodo">add</button> -->
    </div>
</template>

<script>
export default {
    data:function() {
        return {
            newTodoItem: ""
        }
    },
    //life cycle method
    mounted() {
      this.$refs.newTodoItem.focus();
    },
    methods:{
        addTodo() {
            if (this.newTodoItem !== '') {
                //addEvent 이름으로 event를 발생시킨다
                //this.$emit('addEvent', this.newTodoItem);

                //store mutations에 정의된 addTodo 호출한다
                //this.$store.commit('addTodo', this.newTodoItem);

                //store actions에 정의된 addTodo 호출
                const todoObj = { completed: false, item: this.newTodoItem };
                this.$store.dispatch('addTodo', todoObj);
                this.clearInput();
            }
        },
        clearInput() {
            //addTodo() 함수에 있었지만 clearInput()함수로 이동            
            //input field 초기화
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 15px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
