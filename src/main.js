import { createApp } from "vue";
// Main Sytle
import "./style.css";
// App
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);

app.mount("#app");
