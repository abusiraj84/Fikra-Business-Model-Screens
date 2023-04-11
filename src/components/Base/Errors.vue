<template>
	<div>
		<p v-for="error in errors" :key="error" class="block mb-2 text-sm font-medium text-red-500">• {{ error }}</p>
	</div>
</template>

<script setup>
	const { errors } = defineProps({
		errors: { type: Array, required: true, default: [] },
	});
</script>
