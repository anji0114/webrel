import { z } from 'zod';

export const profileValidator = z.object({
  name: z
    .string()
    .min(1, { message: 'ユーザーネームは必須です。' })
    .max(30, { message: 'ユーザーネームは30字以内で入力してください。' }),
  occupation: z
    .string()
    .max(30, { message: '職業は30字以内で入力してください。' }),
  accountId: z
    .string()
    .min(6, 'アカウントIDは6文字以上で入力してください。')
    .max(20, 'アカウントIDは20字以内で入力してください。')
    .regex(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/,
      'アカウントIDは半角英数字・記号のみになります',
    ),
});
