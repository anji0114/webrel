import clsx from 'clsx';
import Link from 'next/link';
import {
  FC,
  ReactNode,
  useMemo,
  HTMLAttributeAnchorTarget,
  MouseEvent,
} from 'react';

type TButtonProps = {
  disabled?: boolean;
  isLoading?: boolean;
  color: 'default' | 'blue' | 'sky' | 'dark' | 'red';
  size: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  icon?: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
};

const style = {
  default:
    'relative inline-block rounded-lg inline-flex justify-center items-center text-white font-medium',
  size: {
    sm: 'px-3 min-w-[80px] h-9',
    md: 'w-[140px] h-10',
    lg: 'min-w-[160px] px-3 h-10',
  },
  colors: {
    default: 'bg-blue-dark hover:bg-blue',
    blue: 'bg-blue hover:bg-blue-light',
    sky: 'bg-blue-light hover:bg-blue-dark',
    dark: 'border border-black-700 bg-black-400 hover:bg-black-700',
    red: 'bg-red-700 hover:bg-red-500',
  },
};

// buttonの中身

export const Button: FC<TButtonProps> = ({
  isLoading,
  disabled,
  size,
  color,
  fullWidth = false,
  icon,
  href,
  target,
  onClick,
  type = 'button',
  children,
}) => {
  const buttonContent = useMemo(
    () => (
      <span
        className={clsx(
          style.default,
          style.size[size],
          style.colors[color],
          fullWidth ? 'w-full' : '',
        )}
      >
        {isLoading && (
          <span className='absolute left-1/2 top-[calc(50%_+_1px)] -translate-x-1/2 -translate-y-1/2  h-4 w-4'>
            <span className='inline-block w-full h-full animate-spin rounded-full border-2 border-white border-t-transparent' />
          </span>
        )}
        <span
          className={clsx(
            isLoading ? 'opacity-0' : '',
            icon ? 'flex items-center gap-2' : '',
          )}
        >
          {icon && <span className='w-4'>{icon}</span>}
          <span className='pt-[1px] inline-block'>{children}</span>
        </span>
      </span>
    ),
    [size, color, icon, isLoading, fullWidth, children],
  );

  if (href) {
    return (
      <Link
        className={clsx(
          disabled || isLoading ? 'opacity-50 pointer-events-none' : '',
          fullWidth ? 'w-full' : '',
        )}
        href={href}
        target={target}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={clsx(
        disabled || isLoading ? 'opacity-50 pointer-events-none' : '',
        fullWidth ? 'w-full' : '',
      )}
      type={type}
      onClick={onClick ? (event) => onClick(event) : undefined}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};
