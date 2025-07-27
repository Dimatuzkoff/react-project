import { z } from 'zod';

export const emailSchema = z.string()
    .nonempty("Це поле обов'язкове")
    .email("Невірний формат електронної пошти");
