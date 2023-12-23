import { z } from 'zod';

export const ProjectValidator = z.object({
  name: z.string().min(1, { message: 'プロジェクト名は必須です' }).max(30, {
    message: 'プロジェクト名は30字以上入力することはできません',
  }),
  description: z.string().max(800, {
    message: 'プロジェクト概要は800字以上入力することはできません',
  }),
  url: z
    .string()
    .url({ message: 'URL形式で入力ください。' })
    .refine((url) => !url.endsWith('/'), {
      message: 'URLの最後に "/" を含めないでください。',
    }),
});

export const ProjectEditValidator = ProjectValidator.omit({
  url: true,
});
