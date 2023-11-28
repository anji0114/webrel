import { redirect } from 'next/navigation';
import { FC, ReactNode } from 'react';
import { NonLoginHeader } from '@/app/components/Header/NonLoginHeader';
import { getAuthSession } from '@/libs/auth';

type TAuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<TAuthLayoutProps> = async ({ children }) => {
  const session = await getAuthSession();

  if (session?.user.id) {
    redirect('/dashboard');
  }

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
