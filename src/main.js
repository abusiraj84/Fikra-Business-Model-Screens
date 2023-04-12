import { createApp } from "vue";
import VueSelect from "vue-next-select";
import "vue-next-select/dist/index.css";
// Main Sytle
import "./style.css";
// App
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);

app.component("vue-select", VueSelect);

app.mount("#app");
