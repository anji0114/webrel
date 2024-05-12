import clsx from 'clsx';
import Link from 'next/link';
import {
  FC,
  ReactNode,
  HTMLAttributeAnchorTarget,
  MouseEvent,
  memo,
} from 'react';

export type TButtonProps = {
  disabled?: boolean;
  isLoading?: boolean;
  color: 'dark' | 'blue' | 'red' | 'gray' | 'grayRed';
  size: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  icon?: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variable?: boolean;
  children: ReactNode;
};

const style = {
  default:
    'relative inline-block rounded-lg inline-flex justify-center items-center font-medium',
  size: {
    sm: 'px-4 min-w-[80px] h-9 text-sm',
    md: 'w-[140px] h-10',
    lg: 'min-w-[160px] px-3 h-10',
  },
  variable: 'w-auto px-3',
  colors: {
    dark: 'text-white bg-gray-800 hover:bg-gray-700',
    blue: 'text-white bg-accent hover:bg-accent-dark',
    red: 'text-white bg-danger hover:bg-danger-dark',
    gray: 'text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:border-gray-400',
    grayRed:
      'text-danger bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:border-gray-400',
  },
};

// buttonの中身
const ButtonContent: FC<
  Omit<TButtonProps, 'onClick' | 'target' | 'disabled' | 'href' | 'type'>
> = ({ isLoading, size, color, fullWidth, icon, variable, children }) => {
  return (
    <span
      className={clsx(
        style.default,
        style.size[size],
        style.colors[color],
        { ['w-full']: fullWidth },
        { [style.variable]: variable },
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
        <span className='inline-block'>{children}</span>
      </span>
    </span>
  );
};

const ButtonComponent: FC<TButtonProps> = ({
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
  variable = false,
  children,
}) => {
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
        <ButtonContent
          isLoading={isLoading}
          size={size}
          color={color}
          fullWidth={fullWidth}
          icon={icon}
          variable={variable}
        >
          {children}
        </ButtonContent>
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
      <ButtonContent
        isLoading={isLoading}
        size={size}
        color={color}
        fullWidth={fullWidth}
        icon={icon}
        variable={variable}
      >
        {children}
      </ButtonContent>
    </button>
  );
};

export const Button = memo(ButtonComponent);
