'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/elements/Input';
import { Modal, TModalProps } from '@/components/elements/Modal';
import { Textarea } from '@/components/elements/Textarea';
import { QUERY_KEYS } from '@/constants/queryKey';
import { createProjectApi } from '@/services/projectApi';

type TProjectCreateModalProps = Omit<
  TModalProps,
  'isDisabled' | 'cancelText' | 'hideFooter' | 'children'
>;

type FormValues = {
  name: string;
  description?: string;
};

export const ProjectCreateModal: FC<TProjectCreateModalProps> = ({
  open,
  onCancel,
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { register, getValues, watch } = useForm<FormValues>();
  const nameValue = watch('name');

  const { mutate: createProject, isLoading } = useMutation({
    mutationFn: async (payload: { name: string; description?: string }) => {
      const data = await createProjectApi(payload);
      return data;
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
        onOk={() => {
          if (nameValue) {
            createProject(getValues());
          }
        }}
        isDisabled={!nameValue}
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
