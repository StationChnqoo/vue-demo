import "./assets/main.css";
import "ant-design-vue/dist/reset.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import naive from "naive-ui";

import App from "./App.vue";
import router from "./router";
import { Button, Input, Space } from "ant-design-vue";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Button);
app.use(Input);
app.use(Space);
app.use(naive);
app.mount("#app");
