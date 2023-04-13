<template>
	<div class="mb-16 space-y-2">
		<h2 v-if="heading" class="text-[#1C1C1C] text-xl font-bold">{{ heading }}</h2>
		<p v-if="subHeading" class="text-[#344054] text-base font-normal">{{ subHeading }}</p>
		<div class="flex flex-wrap items-center justify-start">
			<div class="flex justify-start item-center min-w-[120px] m-2" v-for="option in options" :key="option">
				<input
					v-if="questionType === 'Multiple'"
					:id="option.id + questionID"
					type="checkbox"
					:checked="value.includes(option.value)"
					@input="check(option.id, $event.target.checked)" />
				<input
					v-if="questionType === 'Single'"
					:id="option.id + questionID"
					type="radio"
					:value="option.id"
					:checked="option.id === value"
					@change="$emit('update:value', option.id)" />
				<label :for="option.id + questionID" class="text-[#042925] text-lg mx-2">
					{{ option.value }}
				</label>
			</div>
		</div>
		<p v-if="description" class="text-[#344054] text-base font-normal max-w-[74%]">
			{{ description }}
		</p>
	</div>
</template>

<script setup>
	import CheckBox from "./CheckBox.vue";

	const emits = defineEmits(["update:value"]);
	const props = defineProps({
		questionID: {
			type: String,
			required: true,
		},
		questionType: {
			type: String,
			required: true,
		},
		heading: String,
		subHeading: String,
		description: String,
		value: {
			type: Array,
			required: true,
		},
		options: {
			type: Array,
			required: true,
		},
	});

	const check = (optionId, checked) => {
		let updatedValue = [...props.value];
		if (checked) {
			updatedValue.push(props.options.find((obj) => obj.id === optionId));
		} else {
			updatedValue.splice(
				updatedValue.findIndex((obj) => obj.id === optionId),
				1
			);
		}
		emits("update:value", updatedValue);
	};
</script>

<style scoped>
	input[type="checkbox"],
	input[type="radio"] {
		cursor: pointer;
		width: 16px;
		accent-color: #4882ae;
	}
</style>
