import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '@/components/elements/Button';

type TNonLoginHeaderProps = {
  bgTransparent?: boolean;
};

export const NonLoginHeader: FC<TNonLoginHeaderProps> = ({ bgTransparent }) => {
  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full h-[70px] z-[100]',
        !bgTransparent
          ? 'border-b border-gray-400 bg-white bg-opacity-40 backdrop-blur-sm'
          : '',
      )}
    >
      <div className='px-5 flex items-center justify-between w-full h-full md:px-8'>
        <Link className='block w-[90] h-6 hover:opacity-70' href='/'>
          <Image
            src='/images/logo/logo-main.svg'
            alt='Webrel'
            width={90}
            height={24}
          />
        </Link>
        <div className='flex gap-4'>
          <Button href='/login' size='sm' color='gray'>
            ログイン
          </Button>
          <Button href='/register' size='sm' color='dark'>
            新規登録
          </Button>
        </div>
      </div>
    </header>
  );
};
