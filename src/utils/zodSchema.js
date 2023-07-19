import { toFormValidator } from "@vee-validate/zod";
import * as zod from "zod";

const zodName = () =>
  zod
    .string({ required_error: "هذا الحقل مطلوب" })
    .nonempty("هذا الحقل مطلوب")
    .min(3, { message: "يجب أن يكون الاسم من حرفين على الأقل" });

const zodEmail = () =>
  zod
    .string({ required_error: "هذا الحقل مطلوب" })
    .nonempty("هذا الحقل مطلوب")
    .email({ message: "يجب أن يكون الأيميل المدخل أيميل صحيح" });

const zodPassword = () =>
  zod
    .string({ required_error: "هذا الحقل مطلوب" })
    .nonempty("هذا الحقل مطلوب")
    .min(8, { message: "يجب أن تكون كلمة المرور 8 أحرف على الأقل" });

const zodConfirmPassword = zodPassword;

const zodIdNumber = () =>
  zod
    .string({ required_error: "هذا الحقل مطلوب" })
    .nonempty("هذا الحقل مطلوب")
    .regex(/^[0-9]+$/, "يجب أن يتكون هذا الحقل من أرقام فقط");

const zodFullName = () =>
  zod
    .string({ required_error: "هذا الحقل مطلوب" })
    .nonempty("هذا الحقل مطلوب")
    .min(3, { message: "يجب أن يكون الاسم الكامل من ثلاثة أحرف على الأقل" });

const zodWebsite = () =>
  zod
    .string({ required_error: "هذا الحقل مطلوب" })
    .nonempty("هذا الحقل مطلوب")
    .url({ message: "يجب أن يكون الرابط صحيح" });

const zodAddress = () =>
  zod.string({ required_error: "هذا الحقل مطلوب" }).nonempty("هذا الحقل مطلوب");

// Sign Up ZOD Schema
export const firstFormSchema = toFormValidator(
  zod.object({
    name: zodName(),
    email: zodEmail(),
    password: zodPassword(),
    confirm_password: zodConfirmPassword(),
    id_number: zodIdNumber(),
    full_name: zodFullName(),
    website: zodWebsite(),
    address: zodAddress(),
  })
);
