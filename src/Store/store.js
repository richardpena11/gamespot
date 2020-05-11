import Vue from 'vue';
import Vuex from 'vuex';
import admin from './Modules/admin.js'
import posts from './Modules/posts.js'

Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        admin,
        posts
    }
})