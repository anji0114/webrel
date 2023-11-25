'use client';

import { Cog8ToothIcon, HomeIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { Aside } from '@/app/components/Aside';

export const DashboardAside = () => {
  const pathName = usePathname();

  const navItems = useMemo(
    () => [
      {
        title: 'ホーム',
        href: '/dashboard',
        icon: <HomeIcon />,
        isPage: pathName === '/dashboard',
      },
      {
        title: '設定',
        href: '/dashboard/setting',
        icon: <Cog8ToothIcon />,
        isPage: pathName === '/dashboard/setting',
      },
    ],
    [pathName],
  );

  return <Aside navItems={navItems} />;
};
