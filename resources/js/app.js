
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

window.eventBus = new Vue({});

const PageHeader = Vue.component('page-header', require('./components/PageHeader.vue').default);

const Home = Vue.component('home', require('./components/Home.vue').default);
const About= Vue.component('about', require('./components/About.vue').default);


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
