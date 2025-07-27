import { z } from 'zod';

export const firstNameSchema = z.string()
    .min(2, "Мінімум 2 символи")
    .nonempty("Це поле обов'язкове");