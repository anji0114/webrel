'use client';

import {
  ArrowLeftOnRectangleIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/outline';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import { FC } from 'react';
import { Avatar } from '@/components/ui/Avatar';

type THeaderNavProps = {
  user: User;
};

export const HeaderNav: FC<THeaderNavProps> = ({ user }) => {
  const router = useRouter();
  const onLogout = async () => {
    await signOut();
    router.push('/login');
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='outline-none'>
        <Avatar src={user.image} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='z-[101] w-[180px] py-2 bg-white border border-gray-300 rounded-lg shadow'
          align='end'
          sideOffset={10}
        >
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
              onClick={onLogout}
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
