import { z } from 'zod';
import { passwordSchema } from '@/shared/libs/validation/passwordSchema';
import { emailSchema } from '@/shared/libs/validation/emailSchema';
import { firstNameSchema } from '@/shared/libs/validation/firstNameSchema';
export const signUpSchema = z.object({
    firstName: firstNameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Паролі повинні співпадати',
  });

export const signInSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

export type AuthSchemaType = z.infer<typeof signInSchema | typeof signUpSchema>;
