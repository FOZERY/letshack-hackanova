import { defineStore } from 'pinia';

const userData = {
    id: 1,
    name: 'Дмитрий',
    surname: 'Тагиев',
    birthday: '02/09/2004',
    city: 'Белгород',
    email: 'email@test.ru',
    phone: '+7 (904) 080 64-56',
    telegramUrl: 't.me/FOZERY',
    searchingJob: true,
    hackExperience: 'Нет опыта участия в хакатонах',
    jobExperience: '',
    education: 'Студент 2 курса IT-специальности',
    about: 'Я студент 2 курса специальности CS. Знаю HTML, CSS, JavaScript, делал проект на Vue.js и PHP, немного изучал C/C++, знаком с Docker, Git\n',
    requestCommand: true,
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
        async changeUserStatus() {},
    },
});
