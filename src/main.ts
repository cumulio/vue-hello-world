import { createApp } from 'vue'
import App from './App.vue'
import VueCumulio from '@cumul.io/vue-cumulio-dashboard';

const app = createApp(App);
app.use(VueCumulio);

app.mount('#app')
