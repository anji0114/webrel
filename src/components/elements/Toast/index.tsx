import { XMarkIcon } from '@heroicons/react/24/outline';
import * as RadixToast from '@radix-ui/react-toast';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export type TToastProps = {
  type?: 'default' | 'success' | 'error';
  duration?: number;
  open: boolean;
  setOpen: (state: boolean) => void;
} & PropsWithChildren;

export const Toast: FC<TToastProps> = ({
  type = 'default',
  duration,
  open,
  setOpen,
  children,
}) => {
  return (
    <RadixToast.Root
      className='fixed z-50 bottom-5 right-5 pl-6 pr-10 pt-[26px] pb-6 w-[300px] bg-white border border-gray-100 shadow-md rounded-lg '
      open={open}
      duration={duration || 5000}
      onOpenChange={setOpen}
    >
      <RadixToast.Description
        className={clsx(
          { ['text-red-600']: type === 'error' },
          { ['text-green-600']: type === 'success' },
        )}
      >
        {children}
      </RadixToast.Description>
      <RadixToast.Close
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setOpen(false);
        }}
        className='absolute top-2 right-2 w-6 h-6 p-1.5 text-gray-600 rounded-full hover:text-gray-900 hover:bg-gray-200'
      >
        <XMarkIcon />
      </RadixToast.Close>
    </RadixToast.Root>
  );
};
