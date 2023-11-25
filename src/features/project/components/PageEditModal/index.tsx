'use client';

import { FC } from 'react';
import { Modal, TModalProps } from '@/components/elements/Modal';

type TPageEditModalModalProps = Omit<TModalProps, 'isDisabled'> & {
  pageId: string;
  pageName: string;
  pagePath: string;
};

export const PageEditModal: FC<TPageEditModalModalProps> = ({
  open,
  onCancel,
  pageId,
  pageName,
  pagePath,
}) => {
  return (
    <>
      <Modal open={open} onCancel={onCancel}>
        <div>
          {pageId}
          {pageName}
          {pagePath}
        </div>
      </Modal>
    </>
  );
};
