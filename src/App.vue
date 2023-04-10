<template>
	<the-header />
	<h1>Application</h1>
	<the-footer />
</template>

<script>
	import TheHeader from "./layout/TheHeader.vue";
	import TheFooter from "./layout/TheFooter.vue";
	export default {
		components: {
			TheHeader,
			TheFooter,
		},
	};
</script>
