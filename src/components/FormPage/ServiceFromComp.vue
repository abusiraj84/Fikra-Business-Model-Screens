<template>
  <form @submit="onSubmit" class="w-full">
    <div class="space-y-4 md:space-y-4">
      <h2 class="text-[#1C1C1C] text-[24px] font-medium">معلومات ممثل الجهة</h2>
      <!-- Name -->
      <BaseInput
        type="text"
        name="name"
        label="اسم ممثل الجهة  *"
        placeholder="يرجى كتابة اسم ممثل الجهة هنا"
        v-model="name"
        :icon="true"
        :errorState="errors.name"
      >
      </BaseInput>

      <!-- Email -->
      <BaseInput
        type="email"
        name="email"
        label="البريد الالكتروني *"
        placeholder="اكتب البريد الالكتروني هنا"
        v-model="email"
        :errorState="errors.email"
      >
      </BaseInput>
      <!-- Phone Number -->
      <div>
        <label class="block mb-2 text-sm font-medium text-grey"
          >رقم الجوال *</label
        >
        <vue-tel-input
          dir="ltr"
          :class="{ isError: invalidPhoneNumber }"
          v-model="phone"
          v-bind="phoneOptions"
          @on-input="checkPhone"
        >
          <template #icon-right>
            <img src="../../assets/img/phone.svg" alt="Icon" class="w-5"
          /></template>
          <template #arrow-icon>
            <span class="icon arrow-downward"></span
          ></template>
        </vue-tel-input>
        <p
          v-if="invalidPhoneNumber"
          class="block mt-2 text-sm font-medium text-red-500"
        >
          يجب أن يكون رقم الجوال 9 أرقام
        </p>
      </div>

      <!-- ID number -->
      <BaseInput
        type="text"
        name="id_number"
        label="رقم الهوية"
        placeholder="اكتب رقم الهوية هنا"
        v-model="id_number"
        :errorState="errors.id_number"
      />

      <!-- Password -->
      <BaseInput
        type="password"
        name="password"
        label="كلمة المرور *"
        placeholder="اكتب كلمة المرور هنا"
        v-model="password"
        :errorState="errors.password"
      />

      <!-- Confirm Password -->
      <BaseInput
        type="password"
        name="confirm_password"
        label="تأكيد كلمة المرور *"
        placeholder="يرجى اعادة كتابة كلمة المرور"
        v-model="confirm_password"
        :errorState="errors.confirm_password"
      />
    </div>
    <!-- Diveder -->
    <div class="bg-[#00000018] h-[1px] w-full my-5"></div>

    <div class="mb-8 space-y-4 md:space-y-6">
      <h2 class="text-[#1C1C1C] text-[24px] font-medium">معلومات الجهة</h2>
      <!-- Full Name -->
      <BaseInput
        type="text"
        name="name"
        label="الاسم *"
        placeholder="يرجى كتابة الاسم هنا"
        v-model="full_name"
        :icon="true"
        :errorState="errors.full_name"
      />

      <!-- website -->
      <BaseInput
        type="text"
        name="website"
        label="الموقع الإلكتروني *"
        placeholder="اكتب الموقع الإلكتروني هنا"
        v-model="website"
        :errorState="errors.website"
      />

      <!-- adress -->
      <BaseInput
        type="text"
        name="address"
        label="عنوان الجهة / الشركة *"
        placeholder="اكتب عنوان الجهة هنا"
        v-model="address"
        :errorState="errors.address"
      />

      <!-- logo -->
      <div>
        <label class="block mb-2 text-sm font-medium text-grey"
          >شعار مزود الخدمة *</label
        >
        <!-- upload file or drag -->
        <div class="relative">
          <input
            type="file"
            @change="onFileChange"
            class="hidden"
            ref="fileInputRef"
            accept="image/*"
          />
          <div
            class="border border-dashed border-[#D0D5DD] rounded-lg py-[10px] px-[14px] cursor-pointer bg-[#ffffff9f]"
            @dragover.prevent
            @drop="onFileDrop"
            @click="openFilePicker"
          >
            <div class="text-center flex justify-center gap-2 items-center">
              <img src="/images/cloud-upload-1.svg" alt="" />
              <div class="mt-1 text-sm text-gray-600">
                <p>قم بإسقاط الشعار هنا أو أنقر لبدء الرفع</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- pdf -->
      <div>
        <label class="block mb-2 text-sm font-medium text-grey"
          >السجل التجاري *</label
        >
        <!-- upload file or drag -->
        <div class="relative">
          <input
            type="file"
            @change="onFileChange"
            class="hidden"
            ref="fileInputRef"
            accept="image/*"
          />
          <div
            class="border border-dashed border-[#D0D5DD] rounded-lg py-[10px] px-[14px] cursor-pointer bg-[#ffffff9f]"
            @dragover.prevent
            @drop="onFileDrop"
            @click="openFilePicker"
          >
            <div class="text-center flex justify-center gap-2 items-center">
              <img src="/images/cloud-upload-1.svg" alt="" />
              <div class="mt-1 text-sm text-gray-600">
                <p>قم بإسقاط الملفات هنا أو أنقر لبدء الرفع</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RouterLink
      to="/service-form-success"
      type="submit"
      class="w-full py-2 mt-6 text-center text-white rounded-full bg-primary"
    >
      إنشاء الحساب
    </RouterLink>
  </form>
</template>

<script setup>
import BaseInput from "../Base/Input.vue";
import { useField, useForm } from "vee-validate";
import { firstFormSchema } from "../../utils/zodSchema";
import { ref, onMounted } from "vue";
import { defineEmits } from "@vue/runtime-core";

const emit = defineEmits(["validSubmission"]);

const { handleSubmit, errors } = useForm({
  validationSchema: firstFormSchema,
});

const { value: name } = useField("name");
const { value: email } = useField("email");
const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirm_password");
const { value: id_number } = useField("id_number");
const { value: full_name } = useField("full_name");
const { value: website } = useField("website");
const { value: address } = useField("address");

// Phone Related Logic Initialization
const phone = ref(null);
const phoneOptions = {
  mode: "international",
  defaultCountry: "SA",
  // Hide Israel From Country Options
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

// File Upload Related Initialization
const fileInputRef = ref(null);
const selectedFile = ref(null);

onMounted(() => {
  fileInputRef.value = document.querySelector("#fileInput");
});

// Open file picker dialog
function openFilePicker() {
  fileInputRef.value.click();
}

// Handle file selection from file picker
function onFileChange(event) {
  const file = event.target.files[0];
  selectedFile.value = file;
}

// Handle file drop
function onFileDrop(event) {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  selectedFile.value = file;
}

// Change the selection error state
function toggleSelectErrorState() {
  unSelectedprojectDomain.value = false;
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
  if (!phone.value) {
    invalidPhoneNumber.value = true;
  }
}

// Handle Submission
const onSubmit = handleSubmit((values) => {
  // Check Phone Number Entry
  if (!phone.value || invalidPhoneNumber.value) {
    invalidPhoneNumber.value = true;
    return;
  }

  values.phone = phone.value;

  emit("validSubmission", "formOne", values);
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

.vti__dropdown-list {
  width: 300px;
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
