import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'primevue/resources/themes/vela-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './styles/global.scss';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
