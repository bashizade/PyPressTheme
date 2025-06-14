import { createApp } from 'vue';
import App from './App.vue';
import './style.css'
import router from './routes'; // Use default import, not named import

const app = createApp(App);
app.use(router);
app.mount('#app');