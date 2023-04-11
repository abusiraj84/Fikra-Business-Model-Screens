<template>
	<form class="" @submit.prevent="onSubmit">
		<div class="mb-20 space-y-4 md:space-y-6">
			<h2 class="text-[#1C1C1C] text-xl font-bold">المعلومات الشخصية</h2>
			<BaseInput
				type="text"
				name="name"
				label="الاسم الثلاثي *"
				placeholder="يرجى كتابة الاسم هنا"
				v-model="name"
				:icon="true" />
			<BaseInput type="text" name="phone" label="رقم الجوال *" placeholder="○○○○○○○○" v-model="phone" :icon="true" />
			<BaseInput
				type="email"
				name="email"
				label="البريد الالكتروني *"
				placeholder="اكتب البريد الالكتروني هنا"
				v-model="email" />
		</div>
		<div class="mb-8 space-y-4 md:space-y-6">
			<h2 class="text-[#1C1C1C] text-xl font-bold">معلومات المشروع</h2>
			<BaseInput type="text" name="project" label="اسم المشروع *" placeholder="اكتب اسم المشروع هنا" v-model="project" />
			<BaseInput type="text" name="phone" label="مجال المشروع *" placeholder="يرجى الاختيـار" />
		</div>
		<BaseErrors :errors="Object.values(errors)" />
		<button type="submit" class="w-full py-2 mt-6 text-center text-white rounded-full bg-primary">التالي</button>
	</form>
</template>

<script setup>
	import BaseInput from "../Base/Input.vue";
	import BaseErrors from "../Base/Errors.vue";
	import { useField, useForm } from "vee-validate";
	import { firstFormSchema } from "../../utils/zodSchema";

	const { handleSubmit, errors } = useForm({
		validationSchema: firstFormSchema,
	});

	const { value: name } = useField("name");
	const { value: phone } = useField("phone");
	const { value: email } = useField("email");
	const { value: project } = useField("project");

	const onSubmit = handleSubmit(async (values) => {
		console.log("Form Submitted", values);
	});
</script>
