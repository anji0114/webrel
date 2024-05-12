'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/Input';
import { Modal, TModalProps } from '@/components/ui/Modal';
import { QUERY_KEYS } from '@/constants/queryKey';
import { updateProjectPageApi } from '@/features/project/services/projectPagesApi';
import { PageEditValidator } from '@/libs/validators/projectPage';

type TPageEditModalModalProps = Omit<TModalProps, 'isDisabled' | 'onCancel'> & {
  onCancel: () => void;
  projectId: string;
  pageId: string;
  pageName: string;
  pagePath: string;
};

type TFormData = z.infer<typeof PageEditValidator>;

export const PageEditModal: FC<TPageEditModalModalProps> = ({
  open,
  onCancel,
  projectId,
  pageId,
  pageName,
  pagePath,
}) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormData>({
    defaultValues: {
      name: pageName,
      path: pagePath,
    },
    resolver: zodResolver(PageEditValidator),
  });

  const nameValue = watch('name');
  const pathValue = watch('path');

  const { mutate, isLoading } = useMutation({
    mutationFn: async (payload: Omit<TFormData, 'level' | 'projectId'>) => {
      updateProjectPageApi(projectId, pageId, payload);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        QUERY_KEYS.PROJECT.FETCH_PROJECT,
        projectId,
      ]);
      onCancel();
    },
  });

  return (
    <>
      <Modal
        open={open}
        okText='変更する'
        onOk={handleSubmit((payload) => mutate(payload))}
        isLoading={isLoading}
        isDisabled={!nameValue || !pathValue}
        onCancel={onCancel}
      >
        <p className='font-bold text-lg'>ページの編集</p>
        <div className='mt-10 space-y-6'>
          <dl className='md:flex'>
            <dt className='font-medium leading-none md:pt-4 md:w-[140px]'>
              ページ名
            </dt>
            <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
              <Input
                className='w-full'
                placeholder='入力してください'
                {...register('name')}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </dd>
          </dl>
          <dl className='md:flex'>
            <dt className=' font-medium leading-none md:pt-4 md:w-[140px]'>
              パス
            </dt>
            <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
              <Input className='w-full' {...register('path')} />
            </dd>
          </dl>
        </div>
      </Modal>
    </>
  );
};
