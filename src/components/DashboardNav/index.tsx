'use client';

import { FC } from 'react';
import { Avatar } from '@/components/Avatar';

type TUser = {
  image?: string;
};

type TDashboardNavProps = {
  user: TUser | undefined;
};

export const DashboardNav: FC<TDashboardNavProps> = ({ user }) => {
  return (
    <div>
      <Avatar src={user?.image ? user.image : '/images/dummy/image1.png'} />
    </div>
  );
};
