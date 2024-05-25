import { createRouter, createWebHistory } from 'vue-router';
import PageTeamProfile from '@/pages/PageTeamProfile.vue';
import PageUserProfile from '@/pages/PageUserProfile.vue';
import PageMain from '@/pages/PageMain.vue';
import PageTeamProfileEdit from '@/pages/PageTeamProfileEdit.vue';
import PageUserProfileEdit from '@/pages/PageUserProfileEdit.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageMain,
        },
        {
            path: '/personal/profile',
            name: 'profile',
            component: PageUserProfile,
        },
        {
            path: '/personal/profile/edit',
            name: 'profileEdit',
            component: () => import('@/pages/PageUserProfileEdit.vue'),
        },
        {
            path: '/personal/team',
            children: [
                { path: '', name: 'teams', component: PageTeamProfile },
                {
                    path: 'edit',
                    name: 'teamedit',
                    component: PageTeamProfileEdit,
                },
            ],
        },
    ],
});

export default router;
