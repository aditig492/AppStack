import Vue from 'vue';
import Router from 'vue-router';
import BillingPage from '../components/billing-page.vue';
import UserCategory from '../components/user-category.vue';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/home',
        name: 'BillingPage',
        component: BillingPage
    },
    {
        path: '/category/:user',
        name: 'Category',
        component: UserCategory,
        props: true
    }]
});
