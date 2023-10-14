import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

type TInputProps = ComponentProps<'input'> & {
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ className, ...restProps }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          'px-4 py-3 text-base border leading-none border-gray-400 rounded-lg bg-gray-200 outline-none focus:border-gray-500 focus:bg-gray-100',
          { ['bg-gray-300 cursor-not-allowed']: restProps.disabled },
          className,
        )}
        {...restProps}
      />
    );
  },
);

Input.displayName = 'Input';
