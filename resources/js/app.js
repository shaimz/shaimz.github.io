import { createApp } from 'vue'
import main from './main.vue';

const app = createApp({});
app.component('main', main)
    .mount('#app');

require('./bootstrap');
