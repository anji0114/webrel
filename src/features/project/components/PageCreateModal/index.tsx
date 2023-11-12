'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/elements/Input';
import { Modal, TModalProps } from '@/components/elements/Modal';
import { useCreatePage } from '@/features/project/hooks/useCreatePage';
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormData>({
    defaultValues: { name: '', path: '', level: 0, projectId: projectId },
    resolver: zodResolver(PageValidator),
  });

  const { createPage, isLoading } = useCreatePage(projectId);

  const onCreatePage = async (data: TFormData) => {
    createPage(data);
    reset();
    if (onCancel) onCancel();
  };

  return (
    <>
      <Modal
        open={open}
        onCancel={onCancel}
        onOk={handleSubmit(onCreatePage)}
        isLoading={isLoading}
      >
        <p className='font-bold text-xl leading-tight'>新規URL作成</p>
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
