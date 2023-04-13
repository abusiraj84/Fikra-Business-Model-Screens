<template>
	<div class="flex justify-start item-center min-w-[120px] m-2">
		<input
			@input="(event) => $emit('update:checked', event.target.checked)"
			type="checkbox"
			:checked="checked"
			:id="fieldId" />
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
	input[type="checkbox"] {
		cursor: pointer;
		width: 16px;
		accent-color: #4882ae;
	}
</style>
