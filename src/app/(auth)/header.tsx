import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/elements/Button';

export const AuthHeader = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-[70px] border-b border-gray-400 bg-white bg-opacity-40 backdrop-blur-sm'>
      <div className='px-5 flex items-center justify-between w-full h-full md:px-8'>
        <Link className='block w-20 h-[22px] hover:opacity-70' href='/'>
          <Image
            src='/images/logo/logo-main.svg'
            alt='webrel'
            width={80}
            height={22}
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