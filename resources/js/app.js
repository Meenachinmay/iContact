
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const PageHeader = Vue.component('header', require('./components/PageHeader.vue').default);

const Home = Vue.component('header', require('./components/Home.vue').default);
const About= Vue.component('header', require('./components/About.vue').default);


// routes management
const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
];

// a new vue router instance
const router = new VueRouter({
    // mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router,
    components: {PageHeader}
});
