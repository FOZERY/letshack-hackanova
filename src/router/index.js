import { createRouter, createWebHistory } from 'vue-router';
import PageTeamProfile from '@/pages/PageTeamProfile.vue';
import PageMyTeamProfile from '@/pages/PageMyTeamProfile.vue';
import PageTeams from '@/pages/PageTeams.vue';
import PageUserProfile from '@/pages/PageUserProfile.vue';
import PageMain from '@/pages/PageMain.vue';
import PageMyTeamProfileEdit from '@/pages/PageMyTeamProfileEdit.vue';

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
            children: [
                {
                    path: '',
                    name: 'profile',
                    component: PageUserProfile,
                },
                {
                    path: 'edit',
                    name: 'profileEdit',
                    component: () => import('@/pages/PageUserProfileEdit.vue'),
                },
            ],
        },

        {
            path: '/personal/teams',
            children: [
                {
                    path: '',
                    name: 'teams',
                    component: PageTeams,
                },
                {
                    path: 'profile/:id',
                    component: PageTeamProfile,
                },
            ],
        },
        {
            path: '/personal/team',
            children: [
                {
                    path: 'profile',
                    name: 'teamprofile',
                    component: PageMyTeamProfile,
                },
                {
                    path: 'edit',
                    name: 'teamedit',
                    component: PageMyTeamProfileEdit,
                },
            ],
        },
    ],
});

export default router;
