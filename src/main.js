import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';
import axios from "axios";

let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.axios = axios;

import store from './store.js'
import './registerServiceWorker'

app.use(store).mount('#app');