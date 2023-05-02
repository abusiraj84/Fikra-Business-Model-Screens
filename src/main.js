import { createApp } from "vue";
import VueSelect from "vue-next-select";
import "vue-next-select/dist/index.css";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import "vue3-carousel/dist/carousel.css";
// Main Sytle
import "./style.css";
// App
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(VueTelInput, { mode: "auto" });
app.component("vue-select", VueSelect);

app.mount("#app");
