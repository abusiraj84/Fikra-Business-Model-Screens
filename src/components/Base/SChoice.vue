<template>
	<div class="mb-20 space-y-2">
		<h2 v-if="heading" class="text-[#1C1C1C] text-xl font-bold">{{ heading }}</h2>
		<p v-if="subHeading" class="text-[#344054] text-base font-normal">{{ subHeading }}</p>
		<div class="flex flex-wrap items-center justify-start">
			<div class="flex justify-start item-center min-w-[120px] m-2" v-for="option in options" :key="option">
				<input
					:id="option.id + questionID"
					type="radio"
					:value="option.id"
					:checked="option.id === value"
					@change="$emit('update:value', option.id)" />
				<label :for="option.id + questionID" class="text-[#042925] text-lg mx-2">
					{{ option.name }}
				</label>
			</div>
		</div>
		<p v-if="description" class="text-[#344054] text-base font-normal max-w-[75%]">
			{{ description }}
		</p>
	</div>
</template>

<script setup>
	const props = defineProps({
		questionID: {
			type: String,
			required: true,
		},
		heading: String,
		subHeading: String,
		description: String,
		value: {
			type: String,
			required: true,
		},
		options: {
			type: Array,
			required: true,
		},
	});
</script>

<style scoped>
	input[type="radio"] {
		cursor: pointer;
		width: 16px;
		accent-color: #4882ae;
	}
</style>
