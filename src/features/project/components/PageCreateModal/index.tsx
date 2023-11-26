'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/elements/Input';
import { Modal, TModalProps } from '@/components/elements/Modal';
import { QUERY_KEYS } from '@/constants/queryKey';
import { usePathFormatter } from '@/features/project/hooks/usePathFormatter';
import { createPageApi } from '@/features/project/services/createPageApi';
import { PageValidator } from '@/libs/validators/projectPage';

type TPageCreateModalProps = Omit<TModalProps, 'isDisabled'> & {
  projectId: string;
};

type TFormData = z.infer<typeof PageValidator>;

export const PageCreateModal: FC<TPageCreateModalProps> = ({
  open,
  onCancel,
  projectId,
}) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TFormData>({
    defaultValues: { name: '', path: '', level: 0, projectId: projectId },
    resolver: zodResolver(PageValidator),
  });
  const nameValue = watch('name');
  const pathValue = watch('path');

  const { mutate, isLoading } = useMutation({
    mutationFn: async (payload: TFormData) => {
      return createPageApi(payload, projectId);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        QUERY_KEYS.PROJECT.FETCH_PROJECT,
        projectId,
      ]);
      reset();
    },
    onError: () => {
      console.log('エラー');
    },
  });

  const onCreatePage = async (data: TFormData) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const newPath = usePathFormatter(data.path);
    const newData = {
      ...data,
      path: newPath,
    };
    mutate(newData);
  };

  return (
    <>
      <Modal
        open={open}
        onCancel={onCancel}
        onOk={handleSubmit(onCreatePage)}
        isDisabled={!nameValue || !pathValue}
        isLoading={isLoading}
      >
        <p className='font-bold text-xl leading-tight'>新規ページ作成</p>
        <p className='mt-4 text-gray-600'>
          新しいプロジェクトを開始するには、プロジェクト名を入力し、目的やカテゴリを選択してください。
          <br />
          次に、予算や期間などの詳細情報を提供して、プロジェクトをカスタマイズします。
        </p>
        <div className='mt-10 space-y-6'>
          <dl className='md:flex'>
            <dt className=' font-medium leading-none md:pt-4 md:w-[140px]'>
              ページ名
            </dt>
            <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
              <Input
                className='w-full'
                placeholder='サービス'
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
              パス
            </dt>
            <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
              <Input
                className='w-full'
                placeholder='/service'
                required
                {...register('path')}
              />
              {errors.path && (
                <p className='mt-1 text-danger text-sm'>
                  {errors.path.message}
                </p>
              )}
            </dd>
          </dl>
        </div>
      </Modal>
    </>
  );
};
