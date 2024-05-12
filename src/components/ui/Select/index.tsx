import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

type TSelectProps = Omit<ComponentProps<'select'>, 'size' | 'className'> & {
  className?: string;
  wrapClassName?: string;
  size?: 'sm' | 'md' | 'lg';
};

const style = {
  size: {
    sm: 'pl-3 pr-6 h-10',
    md: 'pl-4 pr-6 h-12',
    lg: 'pl-4 pr-6 h-14',
  },
};

export const Select: FC<TSelectProps> = ({
  className,
  wrapClassName,
  size = 'md',
  ...restProps
}) => {
  return (
    <div
      className={twMerge('relative inline-block w-[inherit]', wrapClassName)}
    >
      <select
        className={twMerge(
          clsx(
            'text-base border leading-none border-gray-400 rounded-lg bg-gray-200 outline-none cursor-pointer w-full',
            style.size[size],
            { ['bg-gray-300 cursor-not-allowed']: restProps.disabled },
            className,
          ),
        )}
        {...restProps}
      ></select>
      <ChevronUpDownIcon className='absolute top-1/2 right-3 translate-y-[calc(-50%_+_1px)] w-4 h-4 text-gray-600 pointer-events-none' />
    </div>
  );
};
