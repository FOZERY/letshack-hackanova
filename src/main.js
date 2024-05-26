import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { mask } from 'vue-the-mask';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.directive('mask', mask);

app.use(createPinia());
app.use(router);

app.mount('#app');
