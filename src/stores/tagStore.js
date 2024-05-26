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
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
        // Можно будет переделать через SET и userStore
        getNotAddedTags: (state) => {
            return state.tags.filter((tag) => !tag.isAdded).sort(compareTagsFn);
        },
    },
    actions: {
        async fetchTags() {
            const response = await fetch('/api/tag/get-tag-list');
            const data = await response.json();
            this.tags = data;
        },
    },
});
