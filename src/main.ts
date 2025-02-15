import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import naive from "naive-ui";
import { VueQueryPlugin } from '@tanstack/vue-query'
import 'plyr/dist/plyr.css';

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(VueQueryPlugin)
app.use(router);
app.use(naive);
app.mount("#app");
