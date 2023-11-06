import { FC } from 'react';
import {Modal, TModalProps} from "@/components/elements/Modal"


type TProjectDeleteModalProps = Omit<TModalProps, 'okText' | 'okButtonColor'>;

export const ProjectDeleteModal: FC<TProjectDeleteModalProps> = (props) => {
  return (
    <>
      <Modal  okText='削除する' okButtonColor='red' {...props}>
        <div>
          <p className='text-danger font-bold text-lg'>プロジェクトの削除</p>
          <p className='mt-4'>
            プロジェクトを削除すると、登録した情報は全て削除されます。
            <br />
            このアクションは元に戻すことができませんのでご注意ください。
          </p>
        </div>
      </Modal>
    </>
  );
};
