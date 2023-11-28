'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input, Textarea, Modal, TModalProps } from '@/components/elements';
import { QUERY_KEYS } from '@/constants/queryKey';
import { ProjectValidator } from '@/libs/validators/project';
import { createProjectApi } from '@/services/projectApi';

type TProjectCreateModalProps = Omit<
  TModalProps,
  'isDisabled' | 'cancelText' | 'hideFooter' | 'children'
>;

type FormData = z.infer<typeof ProjectValidator>;

export const ProjectCreateModal: FC<TProjectCreateModalProps> = ({
  open,
  onCancel,
}) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(ProjectValidator),
  });
  const nameValue = watch('name');
  const urlValue = watch('url');

  const { mutate, isLoading } = useMutation({
    mutationFn: async (payload: FormData) => {
      return createProjectApi(payload);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.PROJECT.FETCH_PROJECTS]);
      router.push(`/project/${data.id}`);
    },
    onError: () => {
      console.log('失敗');
    },
  });

  return (
    <>
      <Modal
        open={open}
        onCancel={onCancel}
        okText='作成する'
        onOk={handleSubmit((payload) => {
          mutate(payload);
        })}
        isDisabled={!nameValue || !urlValue}
        isLoading={isLoading}
      >
        <p className='font-bold text-xl leading-tight'>新規プロジェクト作成</p>
        <p className='mt-4 text-gray-600'>
          新しいプロジェクトを開始するには、プロジェクト名を入力し、目的やカテゴリを選択してください。
          <br />
          次に、予算や期間などの詳細情報を提供して、プロジェクトをカスタマイズします。
        </p>
        <div className='mt-10 space-y-6'>
          <dl className='md:flex'>
            <dt className=' font-medium leading-none md:pt-4 md:w-[140px]'>
              プロジェクト名
            </dt>
            <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
              <Input
                className='w-full'
                placeholder='Webアプリケーション開発'
                required
                {...register('name')}
              />
              {errors.name && (
                <p className='mt-1 text-danger text-sm'>
                  {errors.name.message}
                </p>
              )}
            </dd>
          </dl>
          <dl className='md:flex'>
            <dt className=' font-medium leading-none md:pt-4 md:w-[140px]'>
              URL
            </dt>
            <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
              <Input
                className='w-full'
                placeholder='https://webrel.com'
                required
                {...register('url')}
              />
              {errors.url && (
                <p className='mt-1 text-danger text-sm'>{errors.url.message}</p>
              )}
            </dd>
          </dl>
          <dl className='md:flex'>
            <dt className='font-medium leading-none md:pt-4 md:w-[140px]'>
              プロジェクト説明
            </dt>
            <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
              <Textarea
                maxRows={4}
                className='w-full'
                {...register('description')}
              />
            </dd>
          </dl>
        </div>
      </Modal>
    </>
  );
};
