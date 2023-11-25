'use client';

import { Cog6ToothIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useParams, usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { Aside } from '@/app/components/Aside';

export const ProjectAside = () => {
  const { id } = useParams();
  const pathName = usePathname();

  const navItems = useMemo(
    () => [
      {
        title: 'トップ',
        href: `/project/${id}`,
        icon: <HomeIcon />,
        isPage: pathName === `/project/${id}`,
      },
      {
        title: '設定',
        href: `/project/${id}/setting`,
        icon: <Cog6ToothIcon />,
        isPage: pathName === `/project/${id}/setting`,
      },
    ],
    [id, pathName],
  );

  return <Aside navItems={navItems} />;
};
