import { defineStore } from 'pinia';

const teamData = [
    {
        id: 1,
        name: 'Dream',
        commandDescription: 'Супер команда',
        task: 'Работать!',
        requestMessage: 'Нужны ВСЕ!!!!',
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
    },
    {
        id: 2,
        name: 'Dream2',
        commandDescription: 'Супер команда',
        task: 'Работать!',
        requestMessage: 'Нужны ВСЕ!!!!',
        link: 'http://gg',
        status: 'full',
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
    },
    {
        id: 3,
        name: 'Dream3',
        commandDescription: 'Супер команда',
        task: 'Работать!',
        requestMessage: 'Нужны ВСЕ!!!!',
        link: 'http://gg',
        status: 'full',
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
    },
    {
        id: 4,
        name: 'Dream4',
        commandDescription: 'Супер команда',
        task: 'Работать!',
        requestMessage: 'Нужны ВСЕ!!!!',
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
    },
];

export const useTeamStore = defineStore('teamStore', {
    state: () => ({
        team: null,
        teams: [],
    }),
    getters: {
        findTeamById: (state) => {
            return (teamId) => state.team.find((team) => team.id === teamId);
        },
    },
    actions: {
        async fetchTeam() {
            // if (this.team !== null) return;
            // const data = await fetch('/api/team/get-all-teams').then((res) =>
            //     res.json()
            // );
            this.teams = teamData;
        },
        async fetchOneTeam(id) {
            this.team = teamData.find((team) => team.id === +id);
        },
    },
});
