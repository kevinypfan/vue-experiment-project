import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import LoadingComponent from './views/LoadingComponent.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            props: route => ({ qwe: route.query.q })
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => ({
                // The component to load (should be a Promise)
                component: import(/* webpackChunkName: "about" */ './views/About.vue'),
                // A component to use while the async component is loading
                loading: LoadingComponent,
                // A component to use if the load fails
                error: NotFound,
                // Delay before showing the loading component. Default: 200ms.
                delay: 5000,
                // The error component will be displayed if a timeout is
                // provided and exceeded. Default: Infinity.
                timeout: 5000
            }),

            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        }
    ]
});
