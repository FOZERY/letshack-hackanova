import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import TeamProfile from '@/components/TeamProfile.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: App,
        },
        {
            path: '/team',
            name: 'team',
            component: TeamProfile,
        },
    ],
});

export default router;
