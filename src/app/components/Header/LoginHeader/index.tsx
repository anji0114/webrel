import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { HeaderNav } from '@/app/components/Header/HeaderNav';
import { getAuthSession } from '@/libs/auth';

type TLoginHeaderProps = {
  breadCrumb?: string;
};

export const LoginHeader: FC<TLoginHeaderProps> = async ({ breadCrumb }) => {
  const session = await getAuthSession();

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full h-[70px] z-[100] border-b border-gray-400 bg-white',
      )}
    >
      <div className='flex justify-between items-center h-full'>
        <div className='flex items-center h-full pl-6 md:pl-8 md:w-[240px] md:border-r md:border-gray-400'>
          <Link
            className='w-[90px] h-6 inline-block hover:opacity-70'
            href='/dashboard'
          >
            <Image
              src='/images/logo/logo-main.svg'
              alt='Webrel'
              width={90}
              height={24}
            />
          </Link>
        </div>
        <div
          className='flex px-6 
       items-center md:px-8 md:w-[calc(100%_-_240px)]'
        >
          {breadCrumb && <div className='hidden md:block'>{breadCrumb}</div>}
          <div className='ml-auto'>
            <div className='h-10 w-10'>
              {session?.user && <HeaderNav user={session.user} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
