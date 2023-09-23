// import { useRouter } from 'next/router';
import React, { FC, ReactNode } from 'react';
import { AuthHeader } from '@/app/(auth)/header';
// import { getAuthSession } from '@/libs/auth';

type TAuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<TAuthLayoutProps> = async ({ children }) => {
  // const session = await getAuthSession();

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
