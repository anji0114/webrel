import { FC } from 'react';
import { Modal, TModalProps } from '@/components/elements/Modal';
import { useDeleteProjectPage } from '@/features/project/hooks/useProjectPage';

type TPageDeleteModalProps = Omit<TModalProps, 'isDisabled' | 'onCancel'> & {
  onCancel: () => void;
  pageId: string;
  pageName: string;
  projectId: string;
};

export const PageDeleteModal: FC<TPageDeleteModalProps> = ({
  open,
  onCancel,
  pageId,
  pageName,
  projectId,
}) => {
  const { deleteProjectPage, isLoading } = useDeleteProjectPage(
    projectId,
    pageId,
  );

  const onDelete = async () => {
    await deleteProjectPage();
    onCancel();
  };

  return (
    <>
      <Modal
        okText='削除する'
        okButtonColor='red'
        open={open}
        onCancel={onCancel}
        onOk={onDelete}
        isLoading={isLoading}
      >
        <p className='text-danger font-bold text-lg'>ページの削除</p>
        <p className='mt-4'>
          <span className='text-danger font-bold'>{pageName}</span>
          を削除します。
          <br />
          このアクションは元に戻すことができませんのでご注意ください。
        </p>
      </Modal>
    </>
  );
};
