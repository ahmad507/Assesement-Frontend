import About from './components/partials/explore/About'
import Blog from './components/partials/explore/Blog'
import Contact from './components/partials/explore/Contact'
import Site from './components/partials/explore/Site'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Welcome from './components/Welcome'

export default {
    mode: 'history',
    routes: [
        {
            path: '/about_us',
            component: About,
            name: 'about_us',
        },
        {
            path: '/blog',
            component: Blog,
            name: 'blog',
        },
        {
            path: '/contact_us',
            component: Contact,
            name: 'contact_us',
        },
        {
            path: '/site_map',
            component: Site,
            name: 'site_map',
        },
        {
            path: '/welcome',
            component: Welcome,
            name: 'home',
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
        },

    ]
}