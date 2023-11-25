import { FC } from 'react';
import { Modal, TModalProps } from '@/components/elements/Modal';

type TPageDeleteModalProps = Omit<TModalProps, 'isDisabled'> & {
  pageName: string;
  pageId: string;
};

export const PageDeleteModal: FC<TPageDeleteModalProps> = ({
  open,
  onCancel,
  pageName,
}) => {
  return (
    <>
      <Modal
        okText='削除する'
        okButtonColor='red'
        open={open}
        onCancel={onCancel}
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
