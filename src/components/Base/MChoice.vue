<template>
	<div class="mb-20 space-y-2">
		<h2 v-if="heading" class="text-[#1C1C1C] text-xl font-bold">{{ heading }}</h2>
		<p v-if="subHeading" class="text-[#344054] text-base font-normal">{{ subHeading }}</p>
		<div class="flex flex-wrap items-center justify-start">
			<CheckBox
				v-for="option in options"
				:checked="value.includes(option.id)"
				@update:checked="check(option.id, $event)"
				:fieldId="option.name"
				:label="option.name"
				:key="option" />
		</div>
		<p v-if="description" class="text-[#344054] text-base font-normal max-w-[75%]">
			{{ description }}
		</p>
	</div>
</template>

<script setup>
	import CheckBox from "./CheckBox.vue";

	const emits = defineEmits(["update:value"]);
	const props = defineProps({
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
			updatedValue.push(props.options.find((obj) => obj.id === optionId).name);
		} else {
			updatedValue.splice(updatedValue.indexOf(optionId), 1);
		}
		emits("update:value", updatedValue);
	};
</script>
