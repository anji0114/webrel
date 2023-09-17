'use client';
import { TrashIcon } from '@heroicons/react/24/outline';
import { NextPage } from 'next';
import Image from 'next/image';
import { Button } from '@/components/elements/Button';
import { AuthButton } from '@/feature/auth/components/AuthButton';

const Home: NextPage = () => {
  return (
    <div className='space-y-4 max-w-[800px] mx-auto py-10'>
      <div className='space-x-4'>
        <Button href='/' target='_blank' color='dark' size='md'>
          ボタン
        </Button>

        <Button color='red' href='/' size='md'>
          ボタン
        </Button>

        <Button
          color='blue'
          size='md'
          onClick={() => {
            alert('ok');
          }}
          icon={
            <Image
              src='/images/icon/github.svg'
              alt='github'
              width={20}
              height={20}
            />
          }
        >
          ボタン
        </Button>

        <Button color='gray' size='sm' icon={<TrashIcon />}>
          ログイン
        </Button>

        <AuthButton
          provider='github'
          icon={'icon'}
          onClick={() => {
            alert('ok');
          }}
        >
          GitHubでログイン
        </AuthButton>

        <div className='mt-1'>
          <AuthButton
            provider='google'
            icon={'icon'}
            onClick={() => {
              alert('ok');
            }}
          >
            Googleでログイン
          </AuthButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
