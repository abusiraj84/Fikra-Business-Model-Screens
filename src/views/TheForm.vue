<template>
	<div class="flex flex-col h-auto py-20">
		<div v-if="!outputInfoReady" class="grid w-[77.5%] xl:w-[57.6%] grid-cols-10 gap-3 mx-auto">
			<StepProgressBar :progress="step" />
			<TheStaticInfo />
			<div class="col-span-6 p-8 bg-white rounded-[10px]">
				<FromOne v-show="step === 1" @validSubmission="appendData" />
				<FormTwo v-show="step === 2" @validSubmission="appendData" @moveBack="goToPrevStep" />
				<FormThree v-show="step === 3" @validSubmission="appendData" @moveBack="goToPrevStep" />
				<BusinessModelCreation v-if="step === 4" />
			</div>
		</div>
		<div v-else class="br-test">OUTPUT PAGE</div>
	</div>
</template>

<script setup>
	import StepProgressBar from "../components/FormPage/StepProgressBar.vue";
	import TheStaticInfo from "../components/FormPage/TheStaticInfo.vue";
	import FromOne from "../components/FormPage/FromOne.vue";
	import FormTwo from "../components/FormPage/FormTwo.vue";
	import FormThree from "../components/FormPage/FormThree.vue";
	import BusinessModelCreation from "../components/FormPage/BusinessModelCreation.vue";
	import { ref } from "vue";

	const step = ref(1);
	const completeInfo = ref({
		formOne: null,
		formTwo: null,
		formThree: null,
	});
	const outputInfoReady = ref(false);
	const outputInfo = ref([]);

	function appendData(formId, data) {
		completeInfo.value[formId] = data;
		step.value = step.value + 1;
		if (step.value === 4) fetchBMs();
	}

	function goToPrevStep() {
		step.value = step.value - 1;
	}

	function fetchBMs() {
		console.log("FINAL RESULTS", completeInfo.value);
		setTimeout(() => {
			outputInfoReady.value = true;
		}, 8000);
	}
</script>
