import { createApp } from 'vue';
import steupPlugins from './plugins';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/base.css';
import './assets/scss/global.scss';
import 'element-plus/dist/index.css'
import './utils/permission';

const app = createApp(App);
steupPlugins(app);

app.use(store).use(router).mount('#app');
