import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Products from './views/Products.vue';

//http://localhost:12345/ => Home.vue
//http://localhost:12345/about => Aboue.vue
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/products',
        component: Products
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
