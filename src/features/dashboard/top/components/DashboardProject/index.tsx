import { ArrowPathIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { Card } from '@/components/ui/Card';

import { TDashboardProject } from '@/features/dashboard/top/components/DashboardProjects';
import { useFormattedDate } from '@/hooks/useFormattedDate';

export type TDashboardProjectProps = Omit<
  TDashboardProject,
  'pages' | 'urls'
> & {
  className?: string;
};

export const DashboardProject: FC<TDashboardProjectProps> = ({
  id,
  name,
  description,
  updatedAt,
  className,
}) => {
  const formattedUpdatedAt = useFormattedDate(updatedAt);

  return (
    <Card
      as='li'
      className={clsx(
        'relative transition hover:shadow-none hover:border-gray-500',
        className,
      )}
    >
      <h3 className='text-lg font-bold leading-tight'>{name}</h3>
      <p className='mt-3 line-clamp-2 min-h-[calc(2em_*_1.625)]'>
        {description}
      </p>
      <p className='mt-3 flex gap-1 items-center text-gray-600 leading-none'>
        <span className='text-sm'>{formattedUpdatedAt}</span>
        <ArrowPathIcon className='w-[14px] mt-[1px]' />
      </p>
      <Link
        className='absolute top-0 left-0 w-full h-full'
        href={`/project/${id}`}
      ></Link>
    </Card>
  );
};
