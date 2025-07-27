import { z } from 'zod';

export const passwordSchema = z.string()
    .min(4, "Мінімум 4 символи")
    .nonempty("Це поле обов'язкове");
    