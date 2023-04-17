<template>
	<form @submit.prevent="onSubmit">
		<MChoice
			v-for="question in formTwoQuestions"
			:key="question.id"
			:questionID="question.id"
			:questionType="question.type"
			:heading="question.heading"
			:subHeading="question.subHeading"
			:description="question.description"
			:options="question.options"
			:errorState="errorStates[question.id]"
			@updateErrorState="checkError"
			v-model:value="results[question.id]" />

		<div class="flex items-center justify-between w-full">
			<button
				type="button"
				class="w-full py-2 mx-1 mt-6 text-center bg-white border rounded-full text-primary border-primary"
				@click="emit('moveBack')">
				السابق
			</button>
			<button type="submit" class="w-full py-2 mx-1 mt-6 text-center text-white rounded-full bg-primary">التالي</button>
		</div>
	</form>
</template>

<script setup>
	import MChoice from "../Base/MChoice.vue";
	import { ref } from "vue";
	import { formTwoQuestions } from "../../utils/formQuestions";

	const emit = defineEmits(["validSubmission", "moveBack"]);

	const results = ref({});
	const errorStates = ref({});
	formTwoQuestions.forEach((el) => {
		if (el.type === "Multiple") {
			results.value[el.id] = [];
		}

		if (el.type === "Single") {
			results.value[el.id] = {};
		}

		errorStates.value[el.id] = false;
	});

	const checkError = (optionId) => {
		if (results.value[optionId].length || results.value[optionId].id) errorStates.value[optionId] = false;
	};

	const onSubmit = () => {
		let toSubmit = {};
		let errorFound = false;

		Object.entries(results.value).forEach((el) => {
			if (Array.isArray(el[1]) && !el[1].length) {
				errorStates.value[el[0]] = true;
				errorFound = true;
			} else if (!Array.isArray(el[1]) && !el[1].id) {
				errorStates.value[el[0]] = true;
				errorFound = true;
			} else {
				if (Array.isArray(el[1])) {
					let temp = [];
					Object.values(el[1]).forEach((el) => temp.push(el.value));
					toSubmit[el[0]] = temp;
				} else {
					toSubmit[el[0]] = el[1].value;
				}
			}
		});

		if (!errorFound) {
			emit("validSubmission", "formTwo", toSubmit);
		}
	};
</script>
