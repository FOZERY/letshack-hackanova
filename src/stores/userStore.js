import { defineStore } from 'pinia';

const userData = {
    id: 1,
    email: 'email@test.ru',
    phone: 'phone',
    tags: [
        {
            id: 1,
            name: 'Frontend',
        },
        {
            id: 2,
            name: 'Backend',
        },
    ],
};

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null,
    }),
    getters: () => {},
    actions: {
        async fetchUser() {
            this.user = userData;
        },
    },
});
