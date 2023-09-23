import clsx from 'clsx';
import Image from 'next/image';
import { FC, MouseEvent, ReactNode } from 'react';

type TAuthButtonProps = {
  provider: 'google' | 'github';
  isLoading: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

export const AuthButton: FC<TAuthButtonProps> = ({
  provider,
  isLoading,
  onClick,
  children,
}) => {
  return (
    <button
      className={clsx(
        'h-10 w-full flex items-center justify-center text-sm font-bold rounded-lg gap-3 border',
        provider === 'google'
          ? 'bg-white border-gray-500 hover:bg-gray-200'
          : provider === 'github'
          ? 'bg-gray-700 border-transparent text-white hover:bg-gray-800'
          : '',
        isLoading ? 'opacity-70 pointer-events-none' : '',
      )}
      onClick={onClick}
    >
      {isLoading ? (
        <span className='h-5 w-5'>
          <span
            className={clsx(
              'inline-block w-full h-full animate-spin rounded-full border-2  border-t-transparent',
              provider === 'google' ? 'border-gray-900' : 'border-white',
            )}
          />
        </span>
      ) : (
        <Image
          src={
            provider === 'github'
              ? '/images/icon/github.svg'
              : provider === 'google'
              ? '/images/icon/google.svg'
              : ''
          }
          alt='github'
          width={20}
          height={20}
          className='w-5 h-5'
        />
      )}
      <span>{children}</span>
    </button>
  );
};
