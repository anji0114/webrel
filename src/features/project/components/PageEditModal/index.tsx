'use client';

import { FC, useState } from 'react';
import { Input } from '@/components/elements';
import { Modal, TModalProps } from '@/components/elements/Modal';
import { useUpdateProjectPage } from '@/features/project/hooks/useProjectPage';

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
  const [newName, setNewName] = useState(pageName);
  const [newPath, setNewPath] = useState(pagePath);

  const { updateProjectPage } = useUpdateProjectPage(projectId, pageId);

  return (
    <>
      <Modal
        open={open}
        okText='変更する'
        onOk={async () => {
          await updateProjectPage({ name: newName, path: newPath });
          onCancel();
        }}
        onCancel={onCancel}
      >
        <p className='font-bold text-lg'>ページの削除</p>
        <div className='mt-5 space-y-2'>
          <div>
            <Input
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              className='w-full'
              type='text'
            />
          </div>
          <div>
            <Input
              className='w-full'
              value={newPath}
              onChange={(e) => {
                setNewPath(e.target.value);
              }}
              type='text'
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
