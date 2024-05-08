'use client';

import { CameraIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, FC, useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Avatar, Button, Input } from '@/components/elements';
import { QUERY_KEYS } from '@/constants/queryKey';
import { updateProfileApi } from '@/features/dashboardSetting/services/updateProfileApi';
import { profileValidator } from '@/features/dashboardSetting/validators/profile';
import { useToast } from '@/states/Toast';
import { TProfile } from '@/types/profile';

type FormData = z.infer<typeof profileValidator>;

type TDashboardSettingProfileProps = Pick<
  TProfile,
  'name' | 'occupation' | 'accountId' | 'image'
>;

export const DashboardSettingProfile: FC<TDashboardSettingProfileProps> = ({
  name,
  occupation,
  accountId,
  image,
}) => {
  const queryClient = useQueryClient();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
      if (avatarFile) {
      }
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

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (!file || !file.length) {
      openToast({
        type: 'error',
        children: 'アップロードに失敗しました。',
      });
      return;
    }
    setCreateObjectURL(URL.createObjectURL(file[0]));
    setAvatarFile(file[0]);
  };

  const onCancel = useCallback(() => {
    reset();
    setCreateObjectURL(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [inputRef]);

  const onFileClick = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.click();
  }, [inputRef]);

  return (
    <div>
      <div className='space-y-4'>
        <div className='relative w-fit'>
          <Avatar
            className='border border-gray-300'
            src={createObjectURL || image}
            size={120}
            alt=''
          />
          <div
            className='absolute right-0 bottom-0 flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 shadow rounded-full cursor-pointer hover:text-gray-900'
            onClick={onFileClick}
          >
            <CameraIcon className='w-5 h-5' />
          </div>
          <input
            className='hidden'
            ref={inputRef}
            type='file'
            accept='.png, .jpg, .jpeg'
            onChange={(e) => onFileChange(e)}
          />
        </div>
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
        <Button color='gray' size='sm' onClick={onCancel}>
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
