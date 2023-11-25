import { FC, ReactNode } from 'react';
import { DashboardAside } from '@/app/(dashboard)/components/DashboardAside';
import { LoginHeader } from '@/app/components/Header/LoginHeader';

type TDashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: FC<TDashboardLayoutProps> = ({ children }) => {
  return (
    <div className='bg-gray-200'>
      <LoginHeader />
      <div className='pt-[70px]  min-h-screen md:pl-[240px]'>
        <DashboardAside />
        <main className='p-8'>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
