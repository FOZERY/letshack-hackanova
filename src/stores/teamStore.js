import { defineStore } from 'pinia';

const teamData = {
    id: 1,
    name: 'Dream',
    commandDescription: 'Супер команда',
    task: 'Работать!',
    requestMessege: 'Нужны ВСЕ!!!!',
    link: 'http://gg',
    status: 'search',
    participants: [
        {
            id: 10,
            name: 'John',
            inviteTime: 1716528815603,
        },
        {
            id: 10,
            name: 'John2',
            inviteTime: 1716528815603,
        },
        {
            id: 10,
            name: 'John3',
            inviteTime: 1716528815603,
        },
    ],
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

export const useTeamStore = defineStore('teamStore', {
    state: () => ({
        team: null,
    }),
    getters: () => {},
    actions: {
        async fetchTeam() {
            if (this.team !== null) return;
            this.team = teamData;
        },
    },
});
