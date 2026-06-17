import { createApp } from 'vue';
import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import './style.css';

const app = createApp(App);
const bootstrap = createBootstrap();

app.use(router);
app.use(bootstrap);
app.mount('#app');
