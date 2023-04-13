<template>
	<div class="flex flex-col h-auto py-20">
		<div class="grid w-[77.5%] xl:w-[57.6%] grid-cols-10 gap-3 mx-auto">
			<StepProgressBar :progress="step" />
			<TheStaticInfo />
			<div class="col-span-6 p-8 bg-white rounded-[10px]">
				<FromOne v-show="step === 1" @validSubmission="goToNextStep" />
				<FormTwo v-show="step === 2" @validSubmission="goToNextStep" @moveBack="goToPrevStep" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import StepProgressBar from "../components/FormPage/StepProgressBar.vue";
	import TheStaticInfo from "../components/FormPage/TheStaticInfo.vue";
	import FromOne from "../components/FormPage/FromOne.vue";
	import FormTwo from "../components/FormPage/FormTwo.vue";
	import { ref } from "vue";

	const step = ref(2);

	function goToNextStep(data) {
		console.log("Data", data);
		step.value = step.value + 1;
	}

	function goToPrevStep() {
		step.value = step.value - 1;
	}
</script>
