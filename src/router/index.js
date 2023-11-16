import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/pages/login';

Vue.use(VueRouter);

export default new VueRouter({
    routes : [
        {
            path : '*',
            redirect : '/login',
        },
        {
            path : '/',
            name : 'HelloWorld',
            component : HelloWorld,
            meta : { requireAuth : true },
        },
        {
            path : '/login',
            name : 'Login',
            component : Login,
        },
    ],
});
