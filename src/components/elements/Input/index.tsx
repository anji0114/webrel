import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

type TInputProps = Omit<ComponentProps<'input'>, 'size' | 'className'> & {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const style = {
  size: {
    sm: 'px-3 h-10',
    md: 'px-4 h-12',
    lg: 'px-4 h-14',
  },
};

export const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ className, size = 'md', ...restProps }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          'text-base border leading-none border-gray-400 rounded-lg bg-gray-200 outline-none focus:border-gray-500 focus:bg-gray-100',
          style.size[size],
          { ['bg-gray-300 cursor-not-allowed']: restProps.disabled },
          className,
        )}
        {...restProps}
      />
    );
  },
);

Input.displayName = 'Input';
