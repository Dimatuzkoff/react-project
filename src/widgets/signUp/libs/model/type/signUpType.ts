import { z } from 'zod';

export const signUpSchema = z.object({
  firstName: z.string()
    .min(2, 'Мінімум 2 символи')
    .nonempty('Це поле обов\'язкове'),
  email: z.string()
    .nonempty('Це поле обов\'язкове')
    .email('Невірний формат електронної пошти'),
  password: z.string()
    .min(4, 'Мінімум 4 символи')
    .nonempty('Це поле обов\'язкове'),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
