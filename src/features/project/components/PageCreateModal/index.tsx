import { FC } from 'react';
import { Modal, TModalProps } from '@/components/elements/Modal';

type TPageCreateModalProps = Omit<TModalProps, 'isDisabled'>;

export const PageCreateModal: FC<TPageCreateModalProps> = ({
  open,
  onCancel,
}) => {
  return (
    <>
      <Modal open={open} onCancel={onCancel}>
        <p className='font-bold text-xl leading-tight'>新規URL作成</p>
        <p className='mt-4 text-gray-600'>
          新しいプロジェクトを開始するには、プロジェクト名を入力し、目的やカテゴリを選択してください。
          <br />
          次に、予算や期間などの詳細情報を提供して、プロジェクトをカスタマイズします。
        </p>
        <div className='mt-10 space-y-6'>
          <dl>
            <dt>aaa</dt>
            <dd>aaaa</dd>
          </dl>
        </div>
      </Modal>
    </>
  );
};
