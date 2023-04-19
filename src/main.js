import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/assets/css/reset.min.less";
import "@/assets/css/theme.less";

import "ant-design-vue/es/message/style/index.css";

import "@/router/permission";

const app = createApp(App);

app.use(createPinia()).use(router).mount("#app");
