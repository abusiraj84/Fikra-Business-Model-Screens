<template>
	<div class="flex justify-start item-center min-w-[120px] m-2">
		<input @change="$emit('update:value', fieldId)" type="radio" :checked="checked" :value="fi" :id="fieldId" />
		<label :for="fieldId" class="text-[#042925] text-lg mx-2">
			{{ label }}
		</label>
	</div>
</template>

<script setup>
	const props = defineProps({
		label: String,
		fieldId: {
			type: String,
			required: true,
		},
		checked: {
			type: Boolean,
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
