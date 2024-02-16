import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type TCardProps = PropsWithChildren & {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export const Card: FC<TCardProps> = ({
  as: Element = 'div',
  className,
  children,
}) => {
  return (
    <Element
      className={twMerge(
        'p-6 rounded-lg bg-white border border-gray-300 shadow-sm',
        className,
      )}
    >
      {children}
    </Element>
  );
};
