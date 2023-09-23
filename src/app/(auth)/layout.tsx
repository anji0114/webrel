import React, { FC, ReactNode } from 'react';
import { AuthHeader } from '@/app/(auth)/header';

type TAuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<TAuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <AuthHeader />
      <main className='py-24 px-6 min-h-screen flex items-center justify-center'>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
