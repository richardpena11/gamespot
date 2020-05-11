import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './Store/store';

import Home from './components/Home/Index.vue';
import Signin from './components/Signin/Index.vue';
import Dashboard from './components/Dashboard/Index.vue';

import MainDashboard from './components/Dashboard/Main.vue'
import AddPost from './components/Dashboard/AddPost.vue'
import PostList from './components/Dashboard/ListPost.vue'

import Post from './components/Post/Post.vue'

import NotFound from './components/404/Index.vue'

Vue.use(VueRouter);

const authGuard = {
    beforeEnter: (to, from, next) => {

        const rediret = () => {
            
            if ( store.state.admin.token){
                if(to.path === '/signin'){
                    next('/dashboard')
                } else{
                    next()
                }
            } else {
                if(to.path === '/signin'){
                    next()
                } else{
                    next('/')
                }
            }
        }


        if(store.state.admin.refreshLoading){
            store.watch((state, getters) => getters['admin/refreshLoading'], () => {
                rediret();
            })
        } else {
            rediret();
        }

    }
}

const routes = [
    { path: '/', component:Home},
    { path: '/signin', component:Signin, ...authGuard},
    { path: '/dashboard', component:Dashboard, children:[
        { path: '/', component:MainDashboard},
        { path: 'add_posts', component:AddPost},
        { path: 'posts_list', component:PostList}
    ], ...authGuard},
    { path: '/post/:id', component: Post },
    { path: '*', component: NotFound}
];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior () {
        return {x:0, y:0}
    }
})