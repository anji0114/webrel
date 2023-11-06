'use client';

import {
  ArrowLeftOnRectangleIcon,
  BellAlertIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/outline';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import { FC } from 'react';
import { Avatar } from '@/components/elements';

type THeaderNavProps = {
  user: User;
};

export const HeaderNav: FC<THeaderNavProps> = ({ user }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='outline-none'>
        <Avatar src={user.image ? user.image : '/images/dummy/image1.png'} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='z-[101] w-[180px] py-2 bg-white border border-gray-300 rounded-lg shadow'
          align='end'
          sideOffset={10}
        >
          <DropdownMenu.Item className='hover:outline-none'>
            <Link
              href='/dashboard/notice'
              className='text-sm px-4 py-2 w-full flex items-center gap-2 text-left hover:bg-gray-200'
            >
              <BellAlertIcon className='w-4' />
              招待
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='hover:outline-none'>
            <Link
              href='/dashboard/setting'
              className='text-sm px-4 py-2 w-full flex items-center gap-2 text-left hover:bg-gray-200'
            >
              <Cog8ToothIcon className='w-4' />
              設定
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='hover:outline-none'>
            <button
              className='text-sm px-4 py-2 w-full flex items-center gap-2 text-left hover:bg-gray-200'
              onClick={() => signOut()}
            >
              <ArrowLeftOnRectangleIcon className='w-4' />
              ログアウト
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
