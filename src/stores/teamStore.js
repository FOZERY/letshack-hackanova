import { defineStore } from 'pinia';

export const useTeamStore = defineStore('teamStore', {
    state: () => ({
        teams: null,
    }),
    getters: {
        getTeamById: (state) => {
            if (!state.teams) return () => 'gg';
            return (teamId) => state.teams.find((team) => team.id === teamId);
        },
    },
    actions: {
        async fetchTeam() {
            if (this.teams) return;
            const data = await fetch('/api/team/get-all-teams').then((res) =>
                res.json()
            );
            this.teams = data;
        },
        async fetchTeamById(teamId) {
            const data = await fetch(`/api/team/${teamId}/getTeam`).then(
                (res) => res.json()
            );
            const teamIndex = this.teams
                ? this.teams.findIndex((team) => team.id === data.id)
                : -1;

            if (~teamIndex) {
                this.teams[teamIndex] = data;
            } else {
                this.teams = [data];
            }
        },
    },
});
