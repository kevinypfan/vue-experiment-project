import Vue from 'vue';
import './plugins/axios';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store';

Vue.config.productionTip = false;

router.beforeEach(async (to, from, next) => {
    console.log(to);
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isAuth) next();
        try {
            await store.dispatch('checkToken');
            next();
        } catch (err) {
            next('/login');
        }
    } else if (to.path === '/login') {
        if (store.getters.isAuth) next('/');
        try {
            await store.dispatch('checkToken');
            next('/');
        } catch (err) {
            localStorage.removeItem('token');
            next();
        }
    } else {
        next();
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
