'use client';
import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

type TTextareaProps = Omit<ComponentProps<'textarea'>, 'style' | 'ref'> & {
  minRows?: number;
  maxRows?: number;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TTextareaProps>(
  ({ minRows = 4, maxRows = 12, className, ...restProps }, ref) => {
    return (
      <TextareaAutosize
        ref={ref}
        className={clsx(
          'px-4 py-3 text-base border border-gray-400 rounded-lg bg-gray-200 outline-none resize-none focus:border-gray-500 focus:bg-gray-100',
          { ['bg-gray-300 cursor-not-allowed']: restProps.disabled },
          className,
        )}
        minRows={minRows}
        maxRows={maxRows}
        {...restProps}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
