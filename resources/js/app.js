require('./bootstrap');
window.Vue = require('vue').default;
import Vue from 'vue'
import VTooltip from 'v-tooltip'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VTooltip)
Vue.use(VueRouter)


Vue.component('app-component', require("./components/App.vue").default);
Vue.component('welcome-component', require("./components/Welcome.vue").default);
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

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});

