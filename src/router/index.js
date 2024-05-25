import { createRouter, createWebHistory } from 'vue-router';
import PageTeamProfile from '@/pages/PageTeamProfile.vue';
import PageTeamProfileEdit from '@/pages/PageTeamProfileEdit.vue';
import PageTeams from '@/pages/PageTeams.vue';
import PageUserProfile from '@/pages/PageUserProfile.vue';
import PageMain from '@/pages/PageMain.vue';

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
            path: '/personal/teams',
            name: 'teams',
            component: PageTeams,
        },
        {
            path: '/personal/team',
            children: [
                { path: '', name: 'teamprofile', component: PageTeamProfile },
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
