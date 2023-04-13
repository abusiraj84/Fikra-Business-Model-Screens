<template>
	<form @submit="onSubmit">
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
	const emit = defineEmits(["validSubmission", "moveBack"]);

	const onSubmit = () => {
		emit("validSubmission", { age: 12, sex: "male" });
	};
</script>
