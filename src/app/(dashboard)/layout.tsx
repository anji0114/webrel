import React, { FC, ReactNode } from 'react';

import { DashboardAside } from './components/DashboardAside';
import { DashboardHeader } from '@/app/(dashboard)/components/DashboardHeader';

type TDashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: FC<TDashboardLayoutProps> = ({ children }) => {
  return (
    <div className='bg-gray-200 '>
      <DashboardHeader />
      {/* contents */}
      <div className='pt-[70px]  min-h-screen md:pl-[240px]'>
        <DashboardAside />
        <main className='p-8'>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
