<template>
	<div class="flex flex-col h-auto py-10">
		<div class="grid w-[90%] lg:w-[80%] grid-cols-10 gap-3 grid-rows-auto br-test mx-auto">
			<StepProgressBar :progress="0" />
			<TheStaticInfo />
			<div class="col-span-6 p-8 br-test">BOX 3</div>
		</div>
	</div>
</template>

<script>
	import StepProgressBar from "../components/FormPage/StepProgressBar.vue";
	import TheStaticInfo from "../components/FormPage/TheStaticInfo.vue";
	export default {
		components: { TheStaticInfo, StepProgressBar },
	};
</script>
