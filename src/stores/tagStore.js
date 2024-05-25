import { defineStore } from 'pinia';

const tagsData = [
    {
        id: 1,
        name: 'Frontend',
    },
    {
        id: 2,
        name: 'Backend',
    },
    {
        id: 3,
        name: 'UI/UX',
    },
    {
        id: 4,
        name: 'GameDev',
    },
    {
        id: 5,
        name: 'ML/AI',
    },
    {
        id: 6,
        name: 'Product Manager',
    },
    {
        id: 7,
        name: 'Cyber Security',
    },
];

const compareTagsFn = (tag1, tag2) => tag1.id > tag2.id;

export const useTagStore = defineStore('tagStore', {
    state: () => ({
        tags: [],
    }),
    getters: {
        getAllTags: (state) => {
            return state.tags.sort(compareTagsFn);
        },
        getAddedTags: (state) => {
            return state.tags.filter((tag) => tag.isAdded).sort(compareTagsFn);
        },
        getNotAddedTags: (state) => {
            return state.tags.filter((tag) => !tag.isAdded).sort(compareTagsFn);
        },
    },
    actions: {
        async fetchTags() {
            this.tags = tagsData;
        },
    },
});
