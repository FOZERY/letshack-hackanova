import { defineStore } from 'pinia';

const idTest = 6;
export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null,
    }),
    getters: () => {},
    actions: {
        async fetchUser(id) {
            try {
                const response = await fetch(`/api/user/${id}/get-user`);
                const data = await response.json();
                this.user = data;
            } catch (e) {
                console.log(e);
            }
        },
        async updateUserTags(id, tags) {
            try {
                const response = await fetch(
                    `/api/tag/${id}/update-user-tags`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8',
                        },
                        body: JSON.stringify(tags),
                    }
                );
                return response;
            } catch (e) {
                console.log(e);
            }
        },
        async updateUser(userData) {
            try {
                const response = await fetch(
                    `/api/user/${userData.id}/update-Profile`,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8',
                        },
                        body: JSON.stringify(userData),
                    }
                );
                return response;
            } catch (e) {
                console.log(e);
            }
        },
    },
});
