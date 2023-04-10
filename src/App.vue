<template>
	<the-header />
	<div
		class="h-auto min-h-[80vh] flex flex-col items-center justify-center px-[20px] py-[30px] md:px-[62px] md:py-[72px] lg:px-[170px] lg:py-[108px] xl:px-[220px] xl:py-[108px] mx-auto">
		<router-view />
	</div>
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
