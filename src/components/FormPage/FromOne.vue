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
				:icon="true"
				:errorState="errors.name">
			</BaseInput>
			<BaseInput
				type="text"
				name="phone"
				label="رقم الجوال *"
				placeholder="○○○○○○○○"
				v-model="phone"
				:icon="true"
				:errorState="errors.phone">
			</BaseInput>
			<BaseInput
				type="email"
				name="email"
				label="البريد الالكتروني *"
				placeholder="اكتب البريد الالكتروني هنا"
				v-model="email"
				:errorState="errors.email">
			</BaseInput>
		</div>
		<div class="mb-8 space-y-4 md:space-y-6">
			<h2 class="text-[#1C1C1C] text-xl font-bold">معلومات المشروع</h2>
			<BaseInput
				type="text"
				name="project"
				label="اسم المشروع *"
				placeholder="اكتب اسم المشروع هنا"
				v-model="project"
				:errorState="errors.project">
			</BaseInput>
			<div>
				<label class="block mb-2 text-sm font-medium text-grey">مجال المشروع *</label>
				<vue-select
					class="bg-white border border-gray-300 text-grey sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full py-1.5 px-2.5 outline-none"
					:class="{ isError: unSelectedProjectType }"
					v-model="projectType"
					:options="options"
					:placeholder="'يرجى الاختيـار'"
					:close-on-select="true"
					@selected="toggleSelectErrorState">
				</vue-select>
			</div>
		</div>
		<button type="submit" class="w-full py-2 mt-6 text-center text-white rounded-full bg-primary">التالي</button>
	</form>
</template>

<script setup>
	import BaseInput from "../Base/Input.vue";
	import { useField, useForm } from "vee-validate";
	import { firstFormSchema } from "../../utils/zodSchema";
	import { ref } from "vue";

	const { handleSubmit, errors } = useForm({
		validationSchema: firstFormSchema,
	});

	const { value: name } = useField("name");
	const { value: phone } = useField("phone");
	const { value: email } = useField("email");
	const { value: project } = useField("project");

	const projectType = ref(null);
	const options = ["Red", "Green", "Red", "Green", "Red", "Green", "Red", "Green", "Red", "Green"];
	const unSelectedProjectType = ref(false);

	const onSubmit = handleSubmit((values) => {
		if (!projectType.value) {
			unSelectedProjectType.value = true;
		} else {
			unSelectedProjectType.value = false;
			values.projectType = projectType.value;
			console.log("Form Submitted", values);
		}
	}, onInvalidSubmit);

	function onInvalidSubmit({ values, errors, results }) {
		if (!projectType.value) {
			unSelectedProjectType.value = true;
		}
	}

	function toggleSelectErrorState() {
		unSelectedProjectType.value = false;
	}
</script>

<style>
	.isError {
		border: 1px solid #fda29b !important;
		box-shadow: #fee4e2 0px 1px 0px, #fee4e2 0px 0px 8px;
	}
</style>
