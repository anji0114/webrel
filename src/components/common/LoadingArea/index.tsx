import clsx from 'clsx';
import { FC } from 'react';

type TLoadingAreaProps = {
  size?: 'sm' | 'md' | 'lg';
};

const style = {
  size: {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  },
} as const;

export const LoadingArea: FC<TLoadingAreaProps> = ({ size = 'md' }) => {
  return (
    <div className='relative w-full h-28'>
      <span
        className={clsx(
          'absolute left-1/2 top-[calc(50%_+_1px)] -translate-x-1/2 -translate-y-1/2',
          style.size[size],
        )}
      >
        <span className='inline-block w-full h-full animate-spin rounded-full border-2 border-accent border-t-transparent' />
      </span>
    </div>
  );
};
