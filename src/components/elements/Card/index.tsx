import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

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
      className={clsx(
        'p-6 rounded-lg bg-white border border-gray-400 shadow-sm',
        className,
      )}
    >
      {children}
    </Element>
  );
};
