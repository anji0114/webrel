import { ArrowPathIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { Card } from '@/components/Card';

export type TDashboardProject = {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
  className?: string;
};

export const DashboardProject: FC<TDashboardProject> = ({
  id,
  title,
  description,
  updatedAt,
  className,
}) => {
  return (
    <Card
      as='li'
      className={clsx(
        'relative transition hover:shadow-none hover:border-gray-500',
        className,
      )}
    >
      <h3 className='text-lg font-bold leading-tight'>{title}</h3>
      <p className='mt-3 line-clamp-2 min-h-[calc(2em_*_1.625)]'>
        {description}
      </p>
      <p className='mt-3 flex gap-1 items-center text-gray-600 leading-none'>
        <span className='text-sm'>{updatedAt}</span>{' '}
        <ArrowPathIcon className='w-[14px] mt-[1px]' />
      </p>
      <Link
        className='absolute top-0 left-0 w-full h-full'
        href={`/${id}`}
      ></Link>
    </Card>
  );
};
