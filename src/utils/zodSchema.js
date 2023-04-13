import { toFormValidator } from "@vee-validate/zod";
import * as zod from "zod";

const zodName = () =>
	zod.string({ required_error: "Name is required" }).nonempty().min(3, { message: "Name is too short." });

const zodEmail = () =>
	zod.string({ required_error: "Email is required" }).nonempty().email({ message: "Invalid Email." });

// Sign Up ZOD Schema
export const firstFormSchema = toFormValidator(
	zod.object({
		name: zodName(),
		email: zodEmail(),
		project: zod.string({ required_error: "Project is required" }).nonempty().min(10, { message: "Project is too short." }),
	})
);
