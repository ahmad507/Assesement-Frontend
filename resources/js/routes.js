import About from './components/partials/explore/About'
import Blog from './components/partials/explore/Blog'
import Contact from './components/partials/explore/Contact'
import Site from './components/partials/explore/Site'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import App from './components/App'

export default {
    mode: 'history',
    routes: [
        {
            path: '/about_us',
            component: About,
            name: 'about_us',
            meta: {
                enterClass: "animate_animated animate_fadeInLeft",
                leaveClass: "animate_animated animate_fadeOutLeft"
            }
        },
        {
            path: '/blog',
            component: Blog,
            name: 'blog',
            meta: {
                enterClass: "animate_animated animate_fadeInLeft",
                leaveClass: "animate_animated animate_fadeOutLeft"
            }
        },
        {
            path: '/contact_us',
            component: Contact,
            name: 'contact_us',
            meta: {
                enterClass: "animate_animated animate_fadeInLeft",
                leaveClass: "animate_animated animate_fadeOutLeft"
            }
        },
        {
            path: '/site_map',
            component: Site,
            name: 'site_map',
            meta: {
                enterClass: "animate_animated animate_fadeInLeft",
                leaveClass: "animate_animated animate_fadeOutLeft"
            }
        },
        {
            path: '/home',
            component: App,
            name: 'home',
            meta: {
                enterClass: "animate_animated animate_fadeInLeft",
                leaveClass: "animate_animated animate_fadeOutLeft"
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {
                enterClass: "animate_animated animate_fadeInLeft",
                leaveClass: "animate_animated animate_fadeOutLeft"
            }
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
            meta: {
                enterClass: "animate_animated animate_fadeInLeft",
                leaveClass: "animate_animated animate_fadeOutLeft"
            }
        },
    ]
}