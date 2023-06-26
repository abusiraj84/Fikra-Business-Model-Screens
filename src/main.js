import { createApp } from "vue";
import VueSelect from "vue-next-select";
import "vue-next-select/dist/index.css";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import "vue3-carousel/dist/carousel.css";
import YouTube from "vue3-youtube";

import { DefaultApolloClient } from "@vue/apollo-composable";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

// Main Sytle
import "./style.css";
// App
import App from "./App.vue";
import router from "./router";

const httpLink = createHttpLink({
  uri: "https://dev-fikra-api.qewamx.com/graphql",
});
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp(App).provide(DefaultApolloClient, apolloClient);
app.use(router);

app.use(VueTelInput, { mode: "auto" });
app.component("vue-select", VueSelect);
app.component("Youtube", YouTube);

app.mount("#app");
