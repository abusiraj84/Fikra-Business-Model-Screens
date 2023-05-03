import { createRouter, createWebHistory } from "vue-router";

import TheLanding from "./views/TheLanding.vue";
import TheForm from "./views/TheForm.vue";
import TheDocuments from "./views/TheDocuments.vue";
import TheLibrary from "./views/TheLibrary.vue";
import TheArticle from "./views/TheArticle.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: TheLanding },
		{ path: "/create", component: TheForm },
		{ path: "/docs", component: TheDocuments },
		{ path: "/library", component: TheLibrary },
		{ path: "/article", children: [{ path: ":id", component: TheArticle }] },
	],
});

export default router;
