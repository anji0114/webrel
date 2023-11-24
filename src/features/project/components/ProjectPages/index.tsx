import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import React, { FC } from 'react';
import { TProjectPage } from '@/types/project';

type TProjectPagesProps = {
  pages: TProjectPage[] | undefined;
  url?: string;
};

export const ProjectPages: FC<TProjectPagesProps> = ({
  pages,
  url = 'http://localhost:3000',
}) => {
  return (
    <div className='bg-gray-100 overflow-x-scroll border border-gray-400 rounded-2xl shadow-sm'>
      <div className='min-w-[800px]'>
        {/* title */}
        <div className='px-4 py-6 flex justify-between border-b border-gray-400'>
          {/* <div className='w-[10%] text-sm font-bold text-center'>
            ステータス
          </div> */}
          <div className='w-[25%] text-sm font-bold'>ページ名</div>
          <div className='w-[20%] text-sm font-bold'>URLパス</div>
          {/* <div className='w-[15%] text-sm font-bold text-center'>担当者</div> */}
          <div className='w-[10%] text-sm font-bold text-center'>メニュー</div>
          <div className='w-[10%] text-sm font-bold text-center'>リンク</div>
        </div>

        {/* contents */}
        <div className='bg-white rounded-b-2xl'>
          {pages?.map((page, index) => (
            <li
              key={page.id}
              className={clsx('p-3 px-4 flex items-center justify-between', {
                ['border-t border-gray-400']: index !== 0,
              })}
            >
              {/* <div className='w-[10%] flex justify-center items-center'>
                <span className='text-xs font-medium text-white px-3 pt-[2px] pb-[3px] rounded-full bg-danger-light'>
                  未対応
                </span>
              </div> */}
              <div className='w-[25%] flex items-center'>
                <span className='text-sm'>{page.name}</span>
              </div>
              <div className='w-[20%] flex items-center'>
                <span className='text-sm'>{page.path}</span>
              </div>
              {/* <div className='w-[15%] flex gap-0.5 items-center justify-center'>
                <Avatar size='w-5 h-5' sizeNumber={16} src='' />
              </div> */}
              <div className='w-[10%] flex justify-center items-center'>
                <button className='w-5 h-5'>
                  <Bars3Icon />
                </button>
              </div>
              <div className='w-[10%] flex items-center justify-center'>
                <Link
                  href={`${url}/${page.path}`}
                  className='inline-block w-5 h-5 text-accent'
                >
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
