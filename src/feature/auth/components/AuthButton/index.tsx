import clsx from 'clsx';
import Image from 'next/image';
import { FC, MouseEvent, ReactNode } from 'react';

type TAuthButtonProps = {
  provider: 'google' | 'github';
  icon: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

export const AuthButton: FC<TAuthButtonProps> = ({
  provider,
  onClick,
  children,
}) => {
  return (
    <button
      className={clsx(
        'h-10 w-full flex items-center justify-center text-sm font-bold rounded-lg gap-3',
        provider === 'google'
          ? 'bg-white border border-gray-500 hover:bg-gray-200'
          : provider === 'github'
          ? 'bg-gray-700 text-white hover:bg-gray-800'
          : '',
      )}
      onClick={onClick}
    >
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
      <span>{children}</span>
    </button>
  );
};
