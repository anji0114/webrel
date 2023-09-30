import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

type TAvatarProps = {
  src: string | null;
  alt?: string;
  size?: string;
  sizeNumber?: number;
  className?: string;
};

export const Avatar: FC<TAvatarProps> = ({
  src,
  alt = '',
  size = 'w-10 h-10',
  sizeNumber = 40,
  className,
}) => {
  return (
    <div className={clsx('rounded-full', size, className)}>
      <Image
        className='rounded-full w-full h-full object-cover'
        src={src ? src : ''}
        alt={alt}
        width={sizeNumber}
        height={sizeNumber}
      />
    </div>
  );
};
