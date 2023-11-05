import { XMarkIcon } from '@heroicons/react/24/outline';
import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { Button, TButtonProps } from '../Button';

export type TModalProps = PropsWithChildren & {
  open: boolean;
  okText?: string;
  onOk?: () => void;
  okButtonColor?: TButtonProps['color'];
  cancelText?: string;
  onCancel?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  hideFooter?: boolean;
};

export const Modal: FC<TModalProps> = ({
  open,
  okText = '保存する',
  onOk,
  okButtonColor = 'dark',
  cancelText = 'キャンセル',
  onCancel,
  isLoading,
  isDisabled = false,
  hideFooter,
  children,
}) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={onCancel}
          className='fixed inset-0 z-[1000] bg-gray-900 opacity-20'
        />
        <Dialog.Content className='fixed z-[1001] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[700px] w-[calc(100%_-_48px)] bg-white rounded-2xl shadow-lg max-h-[90vh]'>
          <div
            className={clsx(
              'px-6 py-10 overflow-y-scroll',
              !hideFooter ? 'max-h-[calc(90vh_-_85px)]' : 'max-h-[90vh]',
            )}
          >
            {children}
          </div>
          {!hideFooter && (
            <div className='px-8 py-6 border-t border-gray-400 flex gap-6 justify-center'>
              <div className='w-[120px]'>
                <Button color='gray' size='sm' onClick={onCancel} fullWidth>
                  {cancelText}
                </Button>
              </div>
              <div className='w-[120px]'>
                <Button
                  color={okButtonColor}
                  size='sm'
                  onClick={onOk}
                  isLoading={isLoading}
                  disabled={isDisabled}
                  fullWidth
                >
                  {okText}
                </Button>
              </div>
            </div>
          )}
          <button onClick={onCancel} className='absolute top-4 right-4 w-6 h-6'>
            <XMarkIcon />
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
