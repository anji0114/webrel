'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { FC, useState } from 'react';
import { AuthButton } from '@/features/auth/components/AuthButton';

type TAuthContentProps = {
  title: string;
  type: 'login' | 'register';
};

export const AuthContent: FC<TAuthContentProps> = ({ title, type }) => {
  const [googleLoading, setGoogleLoading] = useState(false);

  const authGoogle = async () => {
    setGoogleLoading(true);
    try {
      await signIn('google');
    } catch (error) {
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className='w-full max-w-[400px]'>
      <p className='text-center'>
        <Image
          src='/images/logo/logo-icon.svg'
          alt=''
          width={24}
          height={24}
          className='inline-block'
        />
      </p>
      <h2 className='text-center text-3xl font-bold tracking-wide text-gray-800'>
        {title}
      </h2>
      <div className='mt-12'>
        <AuthButton
          onClick={authGoogle}
          provider='google'
          isLoading={googleLoading}
        >
          Googleで{type === 'register' ? '登録' : 'ログイン'}する
        </AuthButton>
      </div>
      <div className='mt-7'>
        {type === 'register' ? (
          <p>
            会員登録することで、
            <span className='inline-block'>
              <Link
                className='text-accent-light underline underline-offset-2 hover:opacity-70'
                href=''
              >
                利用規約
              </Link>
              <span className='inline-block px-2'>/</span>
              <Link
                className='text-accent-light underline underline-offset-2 hover:opacity-70'
                href=''
              >
                プライバシーポリシー
              </Link>
            </span>
            に同意したとみなします
          </p>
        ) : (
          <p className='text-center'>
            まだ会員登録していない方は
            <Link
              href='/register'
              className='text-accent-light underline underline-offset-2 hover:opacity-70'
            >
              こちらから
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};
