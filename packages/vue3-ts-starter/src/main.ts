import 'virtual:svg-icons-register';
import '@/shared/styles/base.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import SvgIcon from '@/components/SvgIcon.vue';

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.component('SvgIcon', SvgIcon);

app.mount('#app');
