import React, { FC, ReactNode } from 'react';
import { NonLoginHeader } from '@/app/components/NonLoginHeader';

type TAuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<TAuthLayoutProps> = async ({ children }) => {
  return (
    <div>
      <NonLoginHeader />
      <main className='py-24 px-6 min-h-screen flex items-center justify-center'>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
