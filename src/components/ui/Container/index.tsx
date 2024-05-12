import { FC, PropsWithChildren } from 'react';

type TContainerProps = PropsWithChildren & {
  maxWidth?: `${number}px`;
  isCenter?: boolean;
};

export const Container: FC<TContainerProps> = ({
  children,
  maxWidth = '1000px',
  isCenter = false,
}) => {
  return (
    <div style={{ maxWidth: maxWidth }} className={isCenter ? 'mx-auto' : ''}>
      {children}
    </div>
  );
};
