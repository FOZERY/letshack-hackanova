import { defineStore } from 'pinia';

const tagsData = [
    {
        id: 1,
        name: 'Frontend',
        isAdded: false,
    },
    {
        id: 2,
        name: 'Backend',
        isAdded: false,
    },
    {
        id: 3,
        name: 'UI/UX',
        isAdded: false,
    },
    {
        id: 4,
        name: 'GameDev',
        isAdded: false,
    },
    {
        id: 5,
        name: 'ML/AI',
        isAdded: false,
    },
    {
        id: 6,
        name: 'Product Manager',
        isAdded: false,
    },
    {
        id: 7,
        name: 'Cyber Security',
        isAdded: false,
    },
];

export const useTagStore = defineStore('tagStore', {
    state: () => ({
        tags: [],
    }),
    getters: {
        getAddedTags: (state) => {
            return state.tags.filter((tag) => tag.isAdded);
        },
        getNotAddedTags: (state) => {
            return state.tags.filter((tag) => !tag.isAdded);
        },
    },
    actions: {
        async fetchTags() {
            this.tags = tagsData;
        },
    },
});
