import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { Modal, TModalProps } from '@/components/ui/Modal';
import { QUERY_KEYS } from '@/constants/queryKey';
import { deleteProjectPageApi } from '@/features/project/top/services/projectPagesApi';

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
  const queryClient = useQueryClient();

  const { mutate: deleteProjectPage, isLoading } = useMutation({
    mutationFn: async () => {
      return deleteProjectPageApi(projectId, pageId);
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
        okText='削除する'
        okButtonColor='red'
        open={open}
        onCancel={onCancel}
        onOk={deleteProjectPage}
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
