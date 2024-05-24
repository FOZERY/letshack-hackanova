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
            const addedTags = [];
            state.tags.forEach((tag) => {
                if (tag.isAdded) {
                    addedTags.push(tag);
                }
            });
            return addedTags;
        },
        getNotAddedTags: (state) => {
            const addedTags = [];
            state.tags.forEach((tag) => {
                if (!tag.isAdded) {
                    addedTags.push(tag);
                }
            });
            return addedTags;
        },
    },
    actions: {
        async fetchTags() {
            this.tags = tagsData;
        },
    },
});
