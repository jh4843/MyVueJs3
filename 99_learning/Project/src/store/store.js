import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import todo from './modules/todo';
import post from './modules/post';

Vue.use(Vuex);
//파라미터의 순서가 바뀌면 않된다.
Vue.use(VueAxios, axios);

export const store = new Vuex.Store({
    modules: {
        todo,
        post
    }
});

