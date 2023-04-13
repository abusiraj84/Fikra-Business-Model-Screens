<template>
	<form @submit="onSubmit">
		<div class="mb-20 space-y-4 md:space-y-6">
			<h2 class="text-[#1C1C1C] text-xl font-bold">المعلومات الشخصية</h2>
			<!-- Name -->
			<BaseInput
				type="text"
				name="name"
				label="الاسم الثلاثي *"
				placeholder="يرجى كتابة الاسم هنا"
				v-model="name"
				:icon="true"
				:errorState="errors.name">
			</BaseInput>
			<!-- Phone Number -->
			<div>
				<label class="block mb-2 text-sm font-medium text-grey">رقم الجوال *</label>
				<vue-tel-input
					dir="ltr"
					:class="{ isError: invalidPhoneNumber }"
					v-model="phone"
					v-bind="phoneOptions"
					@on-input="checkPhone">
					<template #icon-right> <img src="../../assets/img/phone.svg" alt="Icon" class="w-5" /></template>
					<template #arrow-icon> <span class="icon arrow-downward"></span></template>
				</vue-tel-input>
			</div>
			<!-- Email -->
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
			<!-- Project Name -->
			<BaseInput
				type="text"
				name="project"
				label="اسم المشروع *"
				placeholder="اكتب اسم المشروع هنا"
				v-model="project"
				:errorState="errors.project">
			</BaseInput>
			<!-- Project Type Option -->
			<div>
				<label class="block mb-2 text-sm font-medium text-grey">مجال المشروع *</label>
				<vue-select
					class="bg-white border border-gray-300 text-grey sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full py-1.5 px-2.5 outline-none"
					:class="{ isError: unSelectedProjectType }"
					:multiple="false"
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

	const emit = defineEmits(["validSubmission"]);

	const { handleSubmit, errors } = useForm({
		validationSchema: firstFormSchema,
	});

	const { value: name } = useField("name");
	const { value: email } = useField("email");
	const { value: project } = useField("project");

	// Phone Related Login Initialization
	const phone = ref(null);
	const phoneOptions = {
		mode: "international",
		defaultCountry: "SA",
		// Hide Israel From Counrty Options
		ignoredCountries: ["IL"],
		autoDefaultCountry: false,
		validCharactersOnly: true,
		autoFormat: true,
		inputOptions: {
			autocomplete: "off",
			maxlength: 25,
			placeholder: "000000000",
		},
		dropdownOptions: {
			showFlags: true,
			showDialCodeInSelection: true,
		},
	};
	const invalidPhoneNumber = ref(false);

	// Project Type Related Login Initialization
	const projectType = ref(null);
	const options = ["Red", "Green"];
	const unSelectedProjectType = ref(false);

	// Change the selection error state
	function toggleSelectErrorState() {
		unSelectedProjectType.value = false;
	}

	// Validate Phone Number (Currently Only For Saudi Arabia)
	function checkPhone(num) {
		if (num) {
			const pattern = /^(?:(?:\+|00)966)?5\d{8}$/;
			let trimmed = num.replace(/\s+/g, "").trim();
			if (!pattern.test(trimmed)) {
				invalidPhoneNumber.value = true;
			} else {
				invalidPhoneNumber.value = false;
			}
		}
	}

	// Handle Invalid Form Submission (Check for Invalid Phone or Unselected Project Type)
	function onInvalidSubmit() {
		if (!projectType.value) {
			unSelectedProjectType.value = true;
		}

		if (!phone.value) {
			invalidPhoneNumber.value = true;
		}
	}

	// Handle Submission
	const onSubmit = handleSubmit((values) => {
		console.log("FORM SUBMITTED");

		// Check Project Type Selection
		if (!projectType.value) {
			unSelectedProjectType.value = true;
			return;
		}

		// Check Phone Number Entry
		if (!phone.value || invalidPhoneNumber.value) {
			invalidPhoneNumber.value = true;
			return;
		}

		unSelectedProjectType.value = false;
		values.phone = phone.value;
		values.projectType = projectType.value;

		emit("validSubmission", values);
	}, onInvalidSubmit);
</script>

<style>
	.isError {
		border: 1px solid #fda29b !important;
		box-shadow: #fee4e2 0px 1px 0px, #fee4e2 0px 0px 8px !important;
	}

	.vue-tel-input {
		background-color: white !important;
		border: 1px solid rgb(209, 213, 219) !important;
		color: rgb(30, 30, 30) !important;
		border-radius: 8px !important;
		box-shadow: none !important;
		padding-right: 10px !important;
	}

	.vti__input {
		border-radius: 8px !important;
		padding: 8px !important;
	}

	.vti__dropdown {
		border-radius: 8px !important;
		width: 128px !important;
	}

	.vue-tel-input:has(.vti__input:focus) {
		border: 1px solid rgb(42, 100, 144) !important;
	}

	.vue-tel-input:has(.vti__dropdown.open) {
		border: 1px solid rgb(42, 100, 144) !important;
		border-radius: 8px !important;
	}

	.vue-tel-input.isError,
	.vue-tel-input.isError:has(.vti__input:focus) {
		border: 1px solid #fda29b !important;
		box-shadow: #fee4e2 0px 1px 0px, #fee4e2 0px 0px 8px !important;
	}

	.icon.arrow-downward {
		box-sizing: border-box;
		height: 10px;
		width: 10px;
		margin-left: 12px;
		margin-bottom: 5px;
		border-style: solid;
		border-color: black;
		border-width: 0px 1px 1px 0px;
		transform: rotate(45deg);
		transition: border-width 150ms ease-in-out;
	}

	.icon.arrow-downward.active {
		transform: rotate(45deg);
	}
</style>
