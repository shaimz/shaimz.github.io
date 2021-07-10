import { createApp } from 'vue'
import main from './main.vue';

const app = createApp({});
app.component('app', main)
    .mount('#app');

require('./bootstrap');
