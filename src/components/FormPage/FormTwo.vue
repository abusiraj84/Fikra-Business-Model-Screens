<template>
	<form @submit="onSubmit">
		<div>
			<MChoice
				:heading="'الشرائح المستهدفة *'"
				:subHeading="'يرجى الاختيار'"
				:description="'-------------------------------------------------------------------'"
				v-model:value="results.firstQ"
				:options="options" />
		</div>
		<div class="mt-4 font-bold text-gray-800">{{ results }}</div>
		<div class="flex items-center justify-between w-full br-test">
			<button type="submit" class="w-full py-2 mx-1 mt-6 text-center text-white rounded-full bg-primary">التالي</button>
			<button
				type="button"
				class="w-full py-2 mx-1 mt-6 text-center bg-white border rounded-full text-primary border-primary"
				@click="emit('moveBack')">
				السابق
			</button>
		</div>
	</form>
</template>

<script setup>
	import MChoice from "../Base/MChoice.vue";
	import { ref } from "vue";

	const emit = defineEmits(["validSubmission", "moveBack"]);

	const results = ref({
		firstQ: [],
	});

	const options = [
		{ name: "B2C", id: 1 },
		{ name: "B2B", id: 2 },
	];

	const onSubmit = () => {
		emit("validSubmission", { age: 12, sex: "male" });
	};
</script>
