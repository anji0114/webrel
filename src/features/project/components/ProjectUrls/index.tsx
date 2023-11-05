import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { Avatar } from '@/components/elements';
import { EXAMPLE_URLS } from '@/features/project/constants/moc';

export const ProjectUrls = () => {
  return (
    <div className='bg-gray-100 overflow-x-scroll border border-gray-400 rounded-2xl shadow-sm'>
      <div className='min-w-[800px]'>
        {/* title */}
        <div className='px-4 py-6 flex justify-between border-b border-gray-400'>
          <div className='w-[10%] text-sm font-bold text-center'>
            ステータス
          </div>
          <div className='w-[25%] text-sm font-bold'>ページ名</div>
          <div className='w-[20%] text-sm font-bold'>URLパス</div>
          <div className='w-[15%] text-sm font-bold text-center'>担当者</div>
          <div className='w-[10%] text-sm font-bold text-center'>メニュー</div>
          <div className='w-[10%] text-sm font-bold text-center'>リンク</div>
        </div>

        {/* contents */}
        <div className='bg-white rounded-b-2xl'>
          {EXAMPLE_URLS.map((url, index) => (
            <li
              key={url.id}
              className={clsx('p-3 px-4 flex items-center justify-between', {
                ['border-t border-gray-400']: index !== 0,
              })}
            >
              <div className='w-[10%] flex justify-center items-center'>
                <span className='text-xs font-medium text-white px-3 pt-[2px] pb-[3px] rounded-full bg-danger-light'>
                  未対応
                </span>
              </div>
              <div className='w-[25%] flex items-center'>
                <Link className='text-sm underline' href={`/url/${url.id}`}>
                  {url.name}
                </Link>
              </div>
              <div className='w-[20%] flex items-center'>
                <span className='text-sm'>{url.path}</span>
              </div>
              <div className='w-[15%] flex gap-0.5 items-center justify-center'>
                <Avatar size='w-4 h-4' sizeNumber={16} src={url.user.image} />
                <span className='text-sm'>{url.user.name}</span>
              </div>
              <div className='w-[10%] flex justify-center items-center'>
                <button className='w-5 h-5'>
                  <Bars3Icon />
                </button>
              </div>
              <div className='w-[10%] flex items-center justify-center'>
                <Link href='/' className='inline-block w-5 h-5 text-accent'>
                  <ArrowTopRightOnSquareIcon />
                </Link>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
