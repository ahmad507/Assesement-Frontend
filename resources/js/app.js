
require('./bootstrap');

window.Vue = require('vue').default;





import Vue from 'vue'
import VTooltip from 'v-tooltip'
import VueRouter from 'vue-router'



Vue.use(VTooltip)
Vue.use(VueRouter)

Vue.component('app-component', require("./components/App.vue").default);
Vue.component('Hhome', require("./components/Home.vue").default);
Vue.component('Header', require("./components/Header.vue").default);
Vue.component('Menu', require('./components/partials/Menu.vue').default);
Vue.component('Body', require('./components/Body.vue').default);
Vue.component('Product', require('./components/partials/Product.vue').default);
Vue.component('Footer', require('./components/Footer.vue').default);


Vue.component('Feed', require('./components/partials/Feed.vue').default);
Vue.component('RightFeeed', require('./components/partials/RightFeed.vue').default);
Vue.component('LeftFeeed', require('./components/partials/LeftFeed.vue').default);


Vue.component('Login', require('./components/pages/Login.vue').default);
Vue.component('Register', require('./components/pages/Register').default);

import Home from './components/Home.vue'
import Dashboard from './components/pages/Dashboard.vue'
import Login from './components/pages/Login.vue'
import Register from './components/pages/Register.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
    ],
})


const app = new Vue({
    el: '#app',
    comments: {
        Home,
    },
    router,
});
