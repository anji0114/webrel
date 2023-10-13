import { FC } from 'react';
import { Card } from '@/components/elements/Card';

export const DashboardProjectsLoading: FC = () => {
  return (
    <div className='flex flex-wrap gap-4'>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <Card
            key={index}
            className='w-full lg:w-[calc((100%_-_16px)_/_2)] xl:w-[calc((100%_-_16px_*_2)_/_3)]'
          >
            <div className='rounded-md w-[90%] h-4 bg-gray-300'></div>
            <div className='mt-4 space-y-2'>
              <p className='rounded h-3 bg-gray-300'></p>
              <p className='rounded h-3 w-3/4 bg-gray-300'></p>
            </div>
            <p className='mt-4 rounded h-2 w-1/5 bg-gray-300'></p>
          </Card>
        ))}
    </div>
  );
};
