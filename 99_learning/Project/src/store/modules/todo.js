import axios from 'axios';

const api_url = process.env.VUE_APP_APIURL;//`http://localhost:4500`;
const todo_url = `${api_url}/api/todos`;

//상태변수 선언
const state = {
    todoItems: []
};
//async method 선언, 서버와 http 통신
const actions = {
    //todo 전체조회
    loadTodoItems(context) {
        axios.get(`${todo_url}`)
            .then(res => res.data)
            .then(items => (context.commit('setTodoItems', items)))
            .catch(error => console.error(error));
    },
    removeTodo(context, payload) {
        axios.delete(`${todo_url}/${payload.id}`)
            .then(res => res.data)
            .then(items => (context.commit('setTodoItems', items)))
            .catch(error => console.error(error));
    },
    addTodo(context, payload) {
        axios.post(`${todo_url}`, payload)
            .then(res => res.data)
            .then(items => (context.commit('setTodoItems', items)))
            .catch(error => console.error(error));
    },
    clearTodo(context){
        axios.delete(`${todo_url}`)
            .then(res => res.data)
            .then(items => (context.commit('setTodoItems', items)))
            .catch(error => console.error(error));
    },
    toggleTodo(context, payload){
        axios.put(`${todo_url}/${payload.id}`, payload)
            .then(res => res.data)
            .then(items => (context.commit('setTodoItems', items)))
            .catch(error => console.error(error));
    }
};
//상태변수를 변경하는 setter method 선언(sync)
const mutations = {
    setTodoItems(state, items){
        state.todoItems = items;
    },
    addTodo(state, todoItem) {
        var obj = { completed: false, item: todoItem };
        //JSON.stringify는 object를 json string 으로 변환
        localStorage.setItem(todoItem, JSON.stringify(obj));
        //상태변수 todoItems에 추가
        state.todoItems.push(obj);
    },
    removeTodo(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleTodo(state, payload) {
        const todoItem = payload.todoItem;
        state.todoItems[payload.index].completed = !todoItem.completed;
        //localStorage에 updateItem 메서드가 없어서 removeItem하고 setItem 한다.
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearTodo(state) {
        localStorage.clear();
        state.todoItems = [];
    }
};

//상태변수를 조회하는 getter method 선언
const getters = {
    getTodoItems(state) {
        return state.todoItems;
    }
};

export default  {
    state, actions, mutations, getters
}