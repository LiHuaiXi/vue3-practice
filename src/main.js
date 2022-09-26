import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router';

// 导入Unocss样式 
import 'uno.css';

// scss
import './style/index.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
