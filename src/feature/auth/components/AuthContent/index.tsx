import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type TAuthContentProps = {
  title: string;
  type: 'login' | 'register';
  buttons: ReactNode[];
};

export const AuthContent: FC<TAuthContentProps> = ({
  title,
  type,
  buttons,
}) => {
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
      <div className='mt-12 space-y-4'>
        {buttons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
      </div>
      {type === 'register' && (
        <p className='mt-7'>
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
      )}
    </div>
  );
};
