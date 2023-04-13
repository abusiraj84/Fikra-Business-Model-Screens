<template>
	<form @submit="onSubmit">
		<MChoice
			v-for="question in formTwoQuestions"
			:key="question.id"
			:questionID="question.id"
			:questionType="question.type"
			:heading="question.heading"
			:subHeading="question.subHeading"
			:description="question.description"
			:options="question.options"
			v-model:value="results[question.id]" />

		<div class="mt-4 font-bold text-gray-800" dir="ltr">{{ results }}</div>
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

	let temp = {};
	formTwoQuestions.forEach((el) => {
		if (el.type === "Multiple") temp[el.id] = [];
		if (el.type === "Single") temp[el.id] = el.options[0].id;
	});

	const results = ref(temp);

	const onSubmit = () => {
		emit("validSubmission", { age: 12, sex: "male" });
	};
</script>
