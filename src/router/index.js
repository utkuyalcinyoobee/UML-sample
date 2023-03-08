// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// App.vue will be redirected to linked components via <router-links>
// as a convention we will create new folder in 'src' named 'views' and place components to be linked in there
// components related to those links needs to be defined below both for import and routes[] array
import Home from '../views/Home.vue'
import Signup from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import SearchUser from '../views/SearchUser.vue'
import ViewRequests from '../views/ViewRequests.vue'
import ViewMessages from '../views/ViewMessages.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sign-up',
        name: 'Sign Up', 
        component: Signup
    },
    {
        path: '/login',
        name: 'Login', 
        component: Login
    },
    {
        path: '/search-user',
        name: 'Search User', 
        component: SearchUser
    },
    {
        path: '/view-requests',
        name: 'View Requests', 
        component: ViewRequests
    },
    {
        path: '/view-messages',
        name: 'View Messages', 
        component: ViewMessages
    }
]
// code below is NOT to be edited
const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router