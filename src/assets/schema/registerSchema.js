
import * as zod from 'zod'
export const schema = zod.object({
    name: zod.string().nonempty("Name is required").min(3, "Your name must contain morethan 3 characters").max(12, 'Your name must contain only 12 characters'),
    email: zod.string().nonempty("E-mail is required").regex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Your email should contain a username, an '@' symbol, and a valid domain (e.g., name@domain.com)"),
    password: zod.string().nonempty("Password is required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/, '8–15 characters, with uppercase, lowercase, number, and special character.'),
    rePassword: zod.string().nonempty("RePassword is required"),
    gender: zod.string().nonempty("Gender is required"),
    dateOfBirth: zod.coerce.date("Date is required").refine((value) => {
        const userAge = value.getFullYear();
        const nowDate = new Date().getFullYear();
        const diff = nowDate - userAge;

        return diff >= 18
    }, "Your age must be morethan 18 years"),

}).refine((data) => data.password === data.rePassword, { path: ['rePassword'], message: "password and rePassword dont match" })