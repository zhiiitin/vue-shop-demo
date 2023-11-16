import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/components/DashboardPage';
import Login from '@/components/pages/Login'; 
import Products from '@/components/ProductsPage';

Vue.use(VueRouter);

export default new VueRouter({
    routes : [
        {
            path : '*',
            redirect : '/login',
        },
        {
            path : '/login',
            name : 'Login',
            component : Login,
        },
        {
            path : '/admin',
            name : 'Dashboard',
            component : Dashboard,
            meta : { requireAuth : true },
            children : [
                {
                    path : 'products',
                    name : 'Products',
                    component : Products,
                    meta : { requireAuth : true },
                },
            ],
        },
    ],
});
