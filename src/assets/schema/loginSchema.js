import * as zod from 'zod'


export const schema = zod.object({
    email: zod.string().nonempty("E-mail is required").regex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Your email should contain a username, an '@' symbol, and a valid domain (e.g., name@domain.com)"),
    password: zod.string().nonempty("Password is required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/, '8–15 characters, with uppercase, lowercase, number, and special character.'),
});
