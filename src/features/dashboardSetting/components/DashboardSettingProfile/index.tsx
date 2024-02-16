'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Input } from '@/components/elements';
import { QUERY_KEYS } from '@/constants/queryKey';
import { updateProfileApi } from '@/features/dashboardSetting/services/updateProfileApi';
import { profileValidator } from '@/features/dashboardSetting/validators/profile';
import { useToast } from '@/states/Toast';
import { TProfile } from '@/types/profile';

type FormData = z.infer<typeof profileValidator>;

type TDashboardSettingProfileProps = Pick<
  TProfile,
  'name' | 'occupation' | 'accountId'
>;

export const DashboardSettingProfile: FC<TDashboardSettingProfileProps> = ({
  name,
  occupation,
  accountId,
}) => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { name, accountId, occupation },
    resolver: zodResolver(profileValidator),
  });

  const openToast = useToast();
  const { mutate: onUpdate, isLoading } = useMutation({
    mutationFn: async (payload: FormData) => {
      return updateProfileApi(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.PROFILE.FETCH_PROFILE]);
      openToast({
        type: 'success',
        children: 'プロフィールを更新しました。',
      });
    },
    onError: (error: { message?: string }) => {
      openToast({
        type: 'error',
        children: error.message || '予期せぬエラーが発生しました。',
      });
    },
  });

  return (
    <div>
      <div className='space-y-4'>
        <dl className='flex items-center'>
          <dt className=' w-40'>ユーザーネーム</dt>
          <dd className='flex-1'>
            <Input size='sm' className='w-full' {...register('name')} />
            {errors.name && (
              <p className='mt-1 px-2 text-sm text-danger'>
                {errors.name.message}
              </p>
            )}
          </dd>
        </dl>
        <dl className='flex items-center'>
          <dt className=' w-40'>職業</dt>
          <dd className='flex-1'>
            <Input size='sm' className='w-full' {...register('occupation')} />
            {errors.occupation && (
              <p className='mt-1 px-2 text-sm text-danger'>
                {errors.occupation.message}
              </p>
            )}
          </dd>
        </dl>
        <dl className='flex items-center'>
          <dt className=' w-40'>アカウントID</dt>
          <dd className='flex-1'>
            <Input size='sm' className='w-full' {...register('accountId')} />
            {errors.accountId && (
              <p className='mt-1 px-2 text-sm text-danger'>
                {errors.accountId.message}
              </p>
            )}
          </dd>
        </dl>
      </div>
      <div className='flex justify-end gap-4 mt-4'>
        <Button
          color='gray'
          size='sm'
          onClick={() => {
            reset();
          }}
        >
          キャンセル
        </Button>
        <Button
          color='blue'
          size='sm'
          isLoading={isLoading}
          onClick={handleSubmit((data) => {
            onUpdate(data);
          })}
        >
          保存する
        </Button>
      </div>
    </div>
  );
};
