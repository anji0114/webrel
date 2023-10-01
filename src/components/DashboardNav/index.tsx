'use client';

import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import { FC } from 'react';
import { Avatar } from '@/components/Avatar';

type TDashboardNavProps = {
  user: User;
};

export const DashboardNav: FC<TDashboardNavProps> = ({ user }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar src={user.image ? user.image : '/images/dummy/image1.png'} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='z-[101]  w-[180px] py-4 bg-white border border-gray-400 rounded-lg'
          align='end'
          sideOffset={10}
        >
          <DropdownMenu.Item className='hover:outline-none'>
            <button
              className='px-4 py-3 w-full text-left hover:bg-gray-100'
              onClick={() => signOut()}
            >
              <ArrowLeftOnRectangleIcon />
              ログアウト
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
