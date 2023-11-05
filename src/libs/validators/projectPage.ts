import { z } from 'zod';

export const ProjectValidator = z.object({
  name: z.string().min(1, { message: 'プロジェクト名は必須です' }).max(30, {
    message: 'プロジェクト名は30字以上入力することはできません',
  }),
  path: z
    .string()
    .min(1, {
      message: 'パスは必須です',
    })
    .max(200, { message: 'プロジェクト名は200字以上入力することはできません' }),
});
