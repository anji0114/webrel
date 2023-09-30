import { Cog8ToothIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

export const DashboardAside = () => {
  return (
    <aside className='md:fixed md:top-[70px] md:left-0 md:w-[240px] md:h-[calc(100vh_-_70px)] md:border-r md:border-gray-400 bg-white'>
      <div className='p-4'>
        <ul className='flex flex-wrap gap-4 md:gap-0.5'>
          <li className='w-[calc(50%_-_8px)] relative md:w-full'>
            {true && (
              <span className='absolute -left-[6px] top-1/2 -translate-x-full -translate-y-1/2 w-1 h-[46px] bg-accent-light rounded-sm'></span>
            )}
            <Link
              href='/'
              className='flex items-center gap-2 w-full h-14 px-4 rounded-lg bg-gray-200'
            >
              <HomeIcon className='w-5' />
              <span>ホーム</span>
            </Link>
          </li>
          <li className='w-[calc(50%_-_8px)] relative md:w-full'>
            <Link
              href='/'
              className='flex items-center gap-2 w-full h-14 px-4 rounded-lg hover:bg-gray-100'
            >
              <Cog8ToothIcon className='w-5' />
              <span>設定</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
