import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'


const routes = [
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path:'/',
        name:'Home',
        component:Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router