<template>
	<the-header />
	<router-view />
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

<style>
	ul li .router-link-exact-active {
		color: #4882ae !important;
		border-bottom: 3px solid #4882ae;
		margin-bottom: -3px;
	}
</style>
