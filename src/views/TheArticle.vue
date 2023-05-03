<template>
	<div>ARTICLE PAGE {{ articleID }}</div>
</template>

<script setup>
	import { useRoute } from "vue-router";
	const route = useRoute();
	let articleID = route.params.id;
</script>
