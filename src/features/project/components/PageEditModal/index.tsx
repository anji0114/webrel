'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { Input } from '@/components/elements';
import { Modal, TModalProps } from '@/components/elements/Modal';
import { QUERY_KEYS } from '@/constants/queryKey';
import { updateProjectPageApi } from '@/features/project/services/projectPagesApi';
import { TPagePayload } from '@/features/project/types/page';

type TPageEditModalModalProps = Omit<TModalProps, 'isDisabled' | 'onCancel'> & {
  onCancel: () => void;
  projectId: string;
  pageId: string;
  pageName: string;
  pagePath: string;
};

export const PageEditModal: FC<TPageEditModalModalProps> = ({
  open,
  onCancel,
  projectId,
  pageId,
  pageName,
  pagePath,
}) => {
  const queryClient = useQueryClient();
  const [newName, setNewName] = useState(pageName);
  const [newPath, setNewPath] = useState(pagePath);

  const { mutate, isLoading } = useMutation({
    mutationFn: async (payload: Omit<TPagePayload, 'level'>) => {
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
        onOk={() => {
          mutate({ name: newName, path: newPath });
        }}
        isLoading={isLoading}
        onCancel={onCancel}
      >
        <p className='font-bold text-lg'>ページの編集</p>
        <div className='mt-10 space-y-6'>
          <dl className='md:flex'>
            <dt className=' font-medium leading-none md:pt-4 md:w-[140px]'>
              ページ名
            </dt>
            <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
              <Input
                className='w-full'
                placeholder='入力してください'
                value={newName}
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              />
            </dd>
          </dl>
          <dl className='md:flex'>
            <dt className=' font-medium leading-none md:pt-4 md:w-[140px]'>
              パス
            </dt>
            <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
              <Input
                className='w-full'
                value={newPath}
                onChange={(e) => {
                  setNewPath(e.target.value);
                }}
              />
            </dd>
          </dl>
        </div>
      </Modal>
    </>
  );
};
