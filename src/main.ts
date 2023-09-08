// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // Import createPinia
import "./style.css";
import router from './router';

const app = createApp(App);

// Use Pinia
const pinia = createPinia();
app.use(router);
app.use(pinia);

app.mount('#app');
