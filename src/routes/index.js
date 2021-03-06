import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '@/views/AskView.vue';
import NewsView from '@/views/NewsView.vue';
import JobsView from '@/views/JobsView.vue';
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            component: NewsView
        },
        {
            path: '/jobs',
            component: JobsView
        },
        {
            path: '/ask',
            component: AskView
        },
        {
            path: '/user',
            component: UserView
        },
        {
            path: '/item',
            component: ItemView
        }
    ]
});