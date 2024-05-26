import { defineStore } from 'pinia';

export const useParticipantsStore = defineStore('paricipantsStore', {
    state: () => ({
        participants: [],
    }),
    getters: () => {},
    actions: {
        async getAllParticipants() {
            try {
                const response = await fetch('/api/user/get-all-users');
                const data = await response.json();
                this.participants = data;
            } catch (e) {
                console.log(e);
            }
        },
        async getParticipantsByTag(tag) {
            const response = await fetch(
                `/api/tag/get-users-by-tags?tags=${tag}`
            );
            const data = await response.json();
            this.participants = data;
        },
    },
});
