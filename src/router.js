import { createRouter, createWebHistory } from "vue-router";

import TheLanding from "./views/TheLanding.vue";
import TheForm from "./views/TheForm.vue";
import TheDocuments from "./views/TheDocuments.vue";
import TheLibrary from "./views/TheLibrary.vue";
import TheArticle from "./views/TheArticle.vue";
import ThePrize from "./views/ThePrize.vue";
import TheEvents from "./views/TheEvents.vue";
import TheEvent from "./views/TheEvent.vue";
import TheServices from "./views/TheServices.vue";
import ProviderFeatures from "./views/ProviderFeatures.vue";
import ServiceForm from "./views/ServiceForm.vue";
import ServiceFormSuccess from "./views/ServiceFormSuccess.vue";
import ProjectInvestment from "./views/ProjectInvestment.vue";
import ServiceDetail from "./views/ServiceDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheLanding },
    { path: "/create", component: TheForm },
    { path: "/docs", component: TheDocuments },
    { path: "/library", component: TheLibrary },
    { path: "/article", children: [{ path: ":id", component: TheArticle }] },

    { path: "/prize", component: ThePrize },

    { path: "/events", component: TheEvents },
    {
      path: "/events",
      children: [{ path: ":id", component: TheEvent, props: true }],
    },

    { path: "/services", component: TheServices },
    { path: "/service", children: [{ path: ":id", component: ServiceDetail }] },

    { path: "/provider-features", component: ProviderFeatures },

    { path: "/service-form", component: ServiceForm },
    { path: "/service-form-success", component: ServiceFormSuccess },

    { path: "/project-investment", component: ProjectInvestment },
  ],
});

//Function called before the user enter each route (page)
// router.beforeEach(function (_, _1, _2) {
// 	window.scroll(0, 0);
// });

export default router;
