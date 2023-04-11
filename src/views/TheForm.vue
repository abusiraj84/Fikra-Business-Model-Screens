<template>
	<div class="flex flex-col h-auto py-20">
		<div class="grid w-[77.5%] xl:w-[57.6%] grid-cols-10 gap-3 mx-auto">
			<StepProgressBar :progress="0" />
			<TheStaticInfo />
			<div class="col-span-6 p-8 bg-white rounded-[10px]">
				<FromOne />
			</div>
		</div>
	</div>
</template>

<script>
	import StepProgressBar from "../components/FormPage/StepProgressBar.vue";
	import TheStaticInfo from "../components/FormPage/TheStaticInfo.vue";
	import FromOne from "../components/FormPage/FromOne.vue";
	export default {
		components: { TheStaticInfo, StepProgressBar, FromOne },
	};
</script>
